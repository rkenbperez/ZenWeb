import requests
from django.shortcuts import render
from django.core.cache import cache


# Create your views here.
def home_view(request):
    return render(request, 'home.html')


def get_server_status(request):
    server_address = 'hypixel.net'
    
    server_data = cache.get('server_status')

    if not server_data:
        try:
            response = requests.get(f'https://api.mcsrvstat.us/3/{server_address}', timeout=5)
            response.raise_for_status()
            server_data = response.json()
            cache.set('server_status', server_data, 30)
        except requests.exceptions.RequestException:
            server_data = {'online': False, 'error': 'Unable to reach server'}
    
    context = {
        'server': server_data,
        'address': server_address
    }
    return render(request, 'server_status.html', context)


def server_status(request):  # Add this alias if needed
    return get_server_status(request)
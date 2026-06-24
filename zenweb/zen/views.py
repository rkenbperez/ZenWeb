import requests
from django.shortcuts import render
from django.core.cache import cache


# Home View
def home_view(request):
    return render(request, 'home.html')

# Form View
def form_view(request):
    return render(request, 'form.html')
from django import forms
from .models import Application
from django.contrib.auth.models import User
from datetime import date

class WhitelistForm(forms.ModelForm):
    class Meta:
        model = Application
        exclude = ['user']
        labels = {
            'minecraft_name': 'Minecraft Username',
            'discord_name': 'Discord Name',
            'fb_name': 'Facebook Name',
            'age': 'Age',
            'country': 'Country',
            'minecraft_experience': 'Minecraft Experience',
            'playStyle': 'Play Style',
            'first_smp': 'First SMP?',
            'is_soloPlayer': 'Solo player?',
            'activity': 'Activity',
        }
        widgets = {
            'minecraft_name': forms.TextInput(attrs={'placeholder': 'Steve', 'class': 'form-control'}),
            'discord_name': forms.TextInput(attrs={'placeholder': 'Steve Discord', 'class': 'form-control'}),
            'fb_name': forms.TextInput(attrs={'placeholder': 'Steve Joe', 'class': 'form-control'}),
            'age': forms.NumberInput(attrs={'placeholder': '18', 'class': 'form-control'}),
            'country': forms.Select(attrs={'class': 'form-control'}),


        }

from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField
from datetime import date


class Application(models.Model):
    
    # Choices
    ACTIVITY_CHOICES = [
        ('every_day', 'Every Day'),
        ('moderate', '4-6 Days'),
        ('occasionally', '2-3 Days'),
        ('not_active', 'Few times per month')


    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, null= True, blank=True)
    application_id = models.AutoField(primary_key=True)
    minecraft_name = models.CharField(max_length=15)
    discord_name = models.CharField(max_length=15)
    fb_name = models.CharField(blank=True, max_length=15)
    age = models.IntegerField()
    country = CountryField()
    minecraft_experience = models.CharField(max_length=50)
    playStyle = models.CharField(50)
    first_smp = models.BooleanField(default=False)
    is_soloPlayer = models.BooleanField(default=False)
    activity = models.CharField(max_length=20, choices=ACTIVITY_CHOICES, default='not_active')


    def __str__(self):
        return f"{self.minecraft_name} - {self.playStyle} - {self.is_soloPlayer} - {self.activity}"

    






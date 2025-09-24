from django.db import models

# Create your models here.

class Dish(models.Model):
    name = models.CharField(max_length=100)
    poster = models.CharField(max_length=500)
    description = models.CharField(max_length=100)
    price = models.IntegerField()
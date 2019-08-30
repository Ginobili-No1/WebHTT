from django.db import models

# Create your models here.
class Join(models.Model):
    name = models.CharField(max_length=32)
    phone = models.IntegerField()
    email = models.CharField(max_length=50)
    adress = models.CharField(max_length=50)

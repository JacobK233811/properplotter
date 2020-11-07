from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


# Create your models here.
class Material(models.Model):
    name = models.CharField(max_length=50)
    desc = models.TextField()
    thermal_conductivity = models.IntegerField()
    elasticity = models.IntegerField()
    density = models.IntegerField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

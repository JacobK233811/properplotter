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
        return f"{self.name} - {self.desc}"


class TraditionalMaterial(Material):
    pass


class NewMaterial(models.Model):
    name = models.CharField(max_length=50)
    desc = models.TextField()
    density = models.CharField(max_length=15, default="NoneYetFound")
    uts = models.CharField(max_length=15, default="NoneYetFound")
    compress = models.CharField(max_length=15, default="NoneYetFound")
    youngs = models.CharField(max_length=15, default="NoneYetFound")
    fracture = models.CharField(max_length=15, default="NoneYetFound")
    hardness = models.CharField(max_length=15, default="NoneYetFound")
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} - {self.desc}"


class NewTraditionalMaterial(NewMaterial):
    pass


class NewAltMaterial(NewMaterial):
    pass

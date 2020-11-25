from django.contrib import admin
from .models import NewMaterial, NewAltMaterial, NewTraditionalMaterial


# Register your models here.
admin.site.register(NewMaterial)
admin.site.register(NewAltMaterial)
admin.site.register(NewTraditionalMaterial)

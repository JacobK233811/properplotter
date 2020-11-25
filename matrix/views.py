from django.shortcuts import render
from .models import NewMaterial, NewAltMaterial, NewTraditionalMaterial


# Create your views here.
def home(request):
    context = {
        "new_materials": NewMaterial.objects.all(),
        "new_alt_materials": NewAltMaterial.objects.all(),
        "new_traditional_materials": NewTraditionalMaterial.objects.all()
    }
    return render(request, "matrix/newhome.html", context)

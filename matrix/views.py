from django.shortcuts import render
from .models import Material, TraditionalMaterial


# Create your views here.
def home(request):
    context = {
        "materials": Material.objects.all(),
        "traditional_materials": TraditionalMaterial.objects.all()
    }
    return render(request, "matrix/home.html", context)

from django.shortcuts import render
from .models import Material


# Create your views here.
def home(request):
    context = {
        "materials": Material.objects.all()
    }
    return render(request, "matrix/home.html", context)

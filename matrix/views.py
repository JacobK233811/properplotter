from django.shortcuts import render
from django.http import JsonResponse
from .models import NewMaterial, NewAltMaterial, NewTraditionalMaterial

def new_materials(request):
    # Be careful with this once you have more data. Then you might want to
    # Sent this in multiple responses
    new_materials = list(NewMaterial.objects.values())
    return JsonResponse(new_materials, safe=False)

def new_alt_materials(request):
    # same as above
    new_alt_materials = list(NewAltMaterial.objects.values())
    return JsonResponse(new_alt_materials, safe=False)

# def traditional_materials(request):
#     # same as above
#     traditioanl_materials = list(NewTraditionalMaterial.objects.values())
#     return JsonResponse(traditional_materials, safe=False)

# Create your views here.
def home(request):
    context = {
        "new_materials": NewMaterial.objects.all(),
        "new_alt_materials": NewAltMaterial.objects.all(),
        "new_traditional_materials": NewTraditionalMaterial.objects.all()
    }
    return render(request, "matrix/newhome.html", context)

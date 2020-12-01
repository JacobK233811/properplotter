"""properplotter URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from matrix import views as matrix_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', matrix_views.home),
    path('new_materials', matrix_views.new_materials),
    path('new_alt_materials', matrix_views.new_alt_materials),
    # path('traditional_materials', matrix_views.traditional_materials)
]

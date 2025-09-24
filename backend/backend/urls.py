from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('api/dish/',include("DishApi.urls")),
    path('admin/', admin.site.urls),
]

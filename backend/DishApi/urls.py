from django.urls import path

from . import views

urlpatterns = [
    path('list', views.DishList),
    path('add', views.DishAdd),
    path('update/<int:id>/', views.DishUpdate),
    path('delete/<int:id>/', views.DishDelete),

]
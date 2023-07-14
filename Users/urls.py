from django.urls import path
from . import views

urlpatterns = [
    path('', views.getUsers, name="users"),
    path('new-user/', views.entryForm, name="new-user")
]

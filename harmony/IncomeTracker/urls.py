from django.urls import path
from . import views

urlpatterns = [

    path('create_individual_account/', views.create_individual_account, name='create_individual_account'),
    ]
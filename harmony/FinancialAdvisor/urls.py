from django.urls import path
from . import views

urlpatterns = [

    path('ask/', views.ask_question, name='ask_question'),
    path('create_individual_account/', views.create_individual_account, name='create_individual_account'),
    
    path('create_joint_account/', views.create_joint_account, name='create_joint_account'),
]
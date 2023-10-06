from django.urls import path
from . import views

urlpatterns = [
    path('create_individual_account/', views.create_individual_account, name='create_individual_account'),
    path('get_accounts/', views.get_accounts, name='get_accounts'),

    path('get_account/', views.get_account, name='get_account'),
    # path('signup_view/', views.signup_view, name='signup_view'),
    # path('login/', views.login_view, name='login'),
    # path('logout/', views.logout_view, name='logout'),

]

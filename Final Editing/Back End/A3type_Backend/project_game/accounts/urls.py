from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('wordsen/', views.get_english_words, name='english-words'),
    path('wordsar/', views.get_arabic_words, name='arabic-words'),
    path('numbers/', views.get_numbers, name='numbers'),
    path('update/', views.gain_exp, name='lvlexp'),
]
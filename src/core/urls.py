from django.urls import path
from . import views 


urlpatterns = [
    path('', views.home_page, name='home'),
    path('text_translate/', views.text_translate, name='text_translate'),
]

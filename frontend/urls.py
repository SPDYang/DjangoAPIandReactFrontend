from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from . import views


app_name = 'interface'

urlpatterns = [
	path('', views.index),
]


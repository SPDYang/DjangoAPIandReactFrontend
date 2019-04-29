from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from rest_framework import routers

from .views import TaskOnSameDate, TaskViewSet, TodoTaskViewSet, ProgressTaskViewSet, DoneTaskViewSet


app_name = 'api'

router = routers.SimpleRouter()
router.register('task', TaskViewSet)
router.register('todo_task', TodoTaskViewSet)
router.register('doing_task', ProgressTaskViewSet)
router.register('done_task', DoneTaskViewSet)

urlpatterns = [
	path('', include(router.urls)),
	path('task/date/<date>/', TaskOnSameDate.as_view(), name = 'same_day'),
]
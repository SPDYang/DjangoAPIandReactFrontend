from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status, generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .Serializers import TaskSerializer
from .models import Task
# Create your views here.


class TaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.all()
	serializer_class = TaskSerializer


class TodoTaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.filter(status = 'todo')
	serializer_class = TaskSerializer


class ProgressTaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.filter(status = 'in-progress')
	serializer_class = TaskSerializer


class DoneTaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.filter(status = 'done')
	serializer_class = TaskSerializer


class TaskOnSameDate(APIView):
	def get(self, request, date, format = None):
		targets = []
		tasks = Task.objects.all()
		for task in tasks:
			if task.obtain_date() == date:
				targets.append(task)
		serializer = TaskSerializer(targets ,many = True)
		return Response(serializer.data)

import json
from django.test import TestCase, Client
from django.urls import reverse

from rest_framework.test import APITestCase
from rest_framework import status

from .models import Task
from .Serializers import TaskSerializer

# Create your tests here.

# Testing task class
class TaskTest(TestCase):
	# setup data for testing
	def setUp(self):
		self.data0 = Task.objects.create(content = 'Shop store', due = '2019-04-25T18:00:00Z', status = 'todo')
		self.data1 = Task.objects.create(content = 'Workout', due = '2019-04-25T18:00:00Z', status = 'in-progress')
		self.data2 = Task.objects.create(content = 'Watch movies', due = '2019-04-22T18:00:00Z', status = 'done')
		self.data3 = Task.objects.create(content = 'Read books', due = '2019-04-21T18:00:00Z', status = 'done')

		self.modified_data0 = {
			'content': 'Shop online',
			'due': '2019-04-26T18:00:00Z',
			'status': 'todo'
		}

	# test of obtaining all available tasks
	def test_get_tasks(self):
		c = Client()
		response = c.get('/api/task/')
		tasks = Task.objects.all()
		serializer = TaskSerializer(tasks, many = True)
		self.assertEqual(response.data, serializer.data)
		self.assertEqual(response.status_code, status.HTTP_200_OK)
	
	# test of obtaining a single task for given id
	def test_get_single_task(self):
		id = str(self.data0.id)
		c = Client()
		response = c.get('/api/task/' + id + '/')
		task2 = Task.objects.get(id = id)
		serializer = TaskSerializer(task2)
		self.assertEqual(response.data, serializer.data)
		self.assertEqual(response.status_code, status.HTTP_200_OK)
	
	# test of creating a new task
	def test_create_task(self):
		c = Client()
		response = c.post('/api/task/', data = json.dumps(self.modified_data0), content_type = 'application/json')
		self.assertEqual(response.status_code, status.HTTP_201_CREATED)

	# test of updating an exisiting task
	def test_update_task(self):
		id = str(self.data0.id)
		c = Client()
		response = c.put('/api/task/' + id + '/', data = json.dumps(self.modified_data0), content_type = 'application/json')
		# PUT response is also HTTP_200_OK 
		# since both PUT and GET for a single task is on the same page
		self.assertEqual(response.status_code, status.HTTP_200_OK)

	# test of deleting an exisiting task
	def test_delete_task(self):
		id = str(self.data0.id)
		c = Client()
		response = c.delete('/api/task/' + id + '/')
		self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

	# test of filtering tasks which have status equals 'todo'
	def test_todo_task(self):
		c = Client()
		response = c.get('/api/todo_task/')
		tasks = Task.objects.filter(status = 'todo')
		serializer = TaskSerializer(tasks, many = True)
		self.assertEqual(response.data, serializer.data)
		self.assertEqual(response.status_code, status.HTTP_200_OK)

	# test of filtering tasks which have status equals 'in-progress'
	def test_doing_task(self):
		c = Client()
		response = c.get('/api/doing_task/')
		tasks = Task.objects.filter(status = 'in-progress')
		serializer = TaskSerializer(tasks, many = True)
		self.assertEqual(response.data, serializer.data)
		self.assertEqual(response.status_code, status.HTTP_200_OK)

	# test of filtering tasks which have status equals 'done'
	def test_done_task(self):
		c = Client()
		response = c.get('/api/done_task/')
		tasks = Task.objects.filter(status = 'done')
		serializer = TaskSerializer(tasks, many = True)
		self.assertEqual(response.data, serializer.data)
		self.assertEqual(response.status_code, status.HTTP_200_OK)

	# test of filtering tasks which has the same due date
	def test_sameday_task(self):
		c = Client()
		response = c.get('/api/task/date/25042019/')
		tasks = Task.objects.filter(due = '2019-04-25T18:00:00Z')
		serializer = TaskSerializer(tasks, many = True)
		self.assertEqual(response.data, serializer.data)
		self.assertEqual(response.status_code, status.HTTP_200_OK)


from django.db import models

# Create your models here.

class Task(models.Model):
	STATUS_CHOICES = (
		('todo', 'Todo'),
		('in-progress', 'In-progress'),
		('done', 'Done')
	)
	content = models.CharField(max_length = 200)
	due = models.DateTimeField()
	status = models.CharField(max_length = 20, choices = STATUS_CHOICES)
	created = models.DateTimeField(auto_now_add = True)
	
	class Meta:
		ordering = ['-due']

	def obtain_date(self):
		date = self.due.strftime('%d') + self.due.strftime('%m') + self.due.strftime('%Y')
		return date

	def __str__(self):
		return str(self.content)
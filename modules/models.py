from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.urls import reverse


class Level(models.Model):
	level_choices = [('first_year','First Year'),('second_year','Second Year'),('third_year','Third Year')]
	name = models.CharField(max_length=20)
	def __str__(self):
		return self.name
	def get_absolute_url(self):
		return reverse('modules:modules-page', kwargs={'level':self.name})

class Subject(models.Model):
	name = models.CharField(max_length=20)
	def __str__(self):
		return str(self.name)
	def get_absolute_url(self):
		return reverse('subjects:detail-subject-page', kwargs={'module':self.name})	
	
	def get_absolute_url_lessons(self):
		return reverse('modules:lessons-page', kwargs={'level':self.level.name, 'module':self.name})	
	def get_absolute_url_subjects(self):
		return reverse('modules:subjects-page', kwargs={'level':self.level.name, 'module':self.name})	


class Lesson(models.Model):
	module = models.ForeignKey('Subject', on_delete=models.CASCADE)
	name = models.CharField(max_length=50)
	def __str__(self):
		return str(self.module.level) + ' - ' + str(self.module.name) + ' - ' + str(self.name)
	def get_absolute_url(self):
		return reverse('modules:detail-lesson-page', kwargs={'module':self.module.name, 'level':self.module.level.name, 'id':self.id})	
	def get_absolute_url_exercises(self):
		return reverse('modules:exercises-page', kwargs={'module':self.module.name, 'level': self.module.level.name, 'id':self.id})	

class Exercise(models.Model):
	toughness_choices = [ ('easy','easy'),('meduim','meduim') ,('hard','hard')]
	module = models.ForeignKey('Subject', on_delete=models.CASCADE)
	lesson = models.ForeignKey('Lesson', on_delete=models.CASCADE)
	toughness = models.CharField(max_length=20, choices=toughness_choices)
	completed_by = ArrayField(models.CharField(max_length=30),null=True, blank=True)
	exercise_solution = models.CharField(max_length=20)

	def __str__(self):
		return str(self.lesson.module.level) + ' - ' + str(self.lesson.module.name) 
	def get_absolute_url(self):
		return reverse('modules:detail-exercise-page', kwargs={ 'level':self.module.level.name,'lesson':self.lesson.name, 'module':self.module.name ,'exercise_id':self.id })		
	def get_absolute_url_exercise_solution(self):
		return reverse('modules:exercise-solution-page', kwargs={'level':self.module.level.name, 'module':self.module.name, 'id':self.lesson.id, 'exercise_id':self.id})	

class Test(models.Model):	
	semester_choices = [('first_semester','First Semester',),('second_semester','Second Semester'),('third_semester','Third Semester')]
	toughness_choices = [ ('easy','easy'),('meduim','meduim') ,('hard','hard')]
	type_choices = [('homework','Homework'),('exam','Exam')]

	module = models.ForeignKey('Subject', on_delete=models.CASCADE)
	semester = models.CharField(max_length=20, choices=semester_choices)
	exam_or_homwork  =  models.CharField(max_length=12, choices=type_choices)
	def get_absolute_url(self):
		return reverse('modules:detail-subject-page', kwargs={'module':self.module.name, 'level':self.module.level.name, 'id':self.id})
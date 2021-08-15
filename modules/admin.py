
from django.contrib import admin
from .models import (
				Level,
				Subject,
				Lesson,
				Exercise,
				Test
		)

admin.site.register(Level)
admin.site.register(Subject)
admin.site.register(Lesson)
admin.site.register(Exercise)
admin.site.register(Test)
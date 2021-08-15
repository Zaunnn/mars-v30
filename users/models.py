from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
import random 



class Account(models.Model):
	username = models.CharField(max_length=12)
	password = models.CharField(max_length=16)
	email = models.EmailField()
	key = models.CharField(max_length=20, blank=True, default=random.randint(1000,999999999))

class Profile(models.Model):
	account = models.ForeignKey('Account', on_delete=models.CASCADE)


@receiver(post_save, sender=Account)
def create_profile(sender, instance, created, **kwargs):
	if created:
		Profile.objects.create(account=instance)

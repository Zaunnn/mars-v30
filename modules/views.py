from django.shortcuts import render
from django.views import View
from .models import Subject
import json


class HomeView(View):
    template_name = 'home.html'
    def get(self, request, *args, **kwargs) :   
        

        return render(request,self.template_name)
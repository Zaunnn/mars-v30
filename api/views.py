from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from users.models import Account
from .serializers import AccountSerializer
from django.views import View
from rest_framework.views import APIView
from rest_framework import status
import jwt, datetime 
from rest_framework.exceptions import AuthenticationFailed
from django.middleware import csrf
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator


class AccountsView(APIView):
    def get(self, request, *args, **kwargs):
        accounts = Account.objects.all()
        serializer = AccountSerializer(accounts, many=True)
        print(csrf.get_token(request))       
        return Response(serializer.data)
    def post(self, request, *args, **kwargs):
        data = JSONParser().parse(request)
        serializer = AccountSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(ensure_csrf_cookie, name='dispatch')
class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']
        try:
            account = Account.objects.get(username=username)
        except :
            raise AuthenticationFailed('User Doesnt Exit')
        if account.password != password :
            raise AuthenticationFailed('Password Wrong')
        payload = {
            "id" : account.id,
            "username" : account.username,
            "iat" : datetime.datetime.utcnow(),


        } 
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = { 'jwt' : token}
        
        return response
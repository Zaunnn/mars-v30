from django.urls import path
from .views import AccountsView, LoginView
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('accounts/', AccountsView.as_view(), name='accounts-page'),
    path('login/', LoginView.as_view(), name='login-page')
]

urlpatterns = format_suffix_patterns(urlpatterns)
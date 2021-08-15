
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path,include
urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', TemplateView.as_view(template_name='base.html')),
    path('' , include('modules.urls')),
    path('api/', include('api.urls'))
    # path('', include('users.urls'))
]

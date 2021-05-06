# dprojx/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url




urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('dappx.api.urls') )
    
]
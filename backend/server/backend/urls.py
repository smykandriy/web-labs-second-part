from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("aircraft/", include("server.apps.aircraft.urls"))
]

from django.urls import path, include
from rest_framework import routers

from server.apps.aircraft.views import HelicopterViewSet

router = routers.DefaultRouter()
router.register(r"helicopters", HelicopterViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

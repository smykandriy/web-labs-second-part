from rest_framework import viewsets

from server.apps.aircraft.models import Helicopter
from server.apps.aircraft.serializers import HelicopterSerializer


class HelicopterViewSet(viewsets.ModelViewSet):
    queryset = Helicopter.objects.all()
    serializer_class = HelicopterSerializer

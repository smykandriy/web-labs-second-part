from rest_framework import serializers

from server.apps.aircraft.models import Helicopter


class HelicopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Helicopter
        fields = ("id", "model", "weight", "fuel_capacity", "max_altitude", "take_off_weight")

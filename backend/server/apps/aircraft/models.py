from django.db import models


class Helicopter(models.Model):
    model = models.CharField(max_length=30)
    weight = models.FloatField()
    fuel_capacity = models.PositiveIntegerField()
    max_altitude = models.DecimalField(max_digits=6, decimal_places=3)
    take_off_weight = models.DecimalField(max_digits=5, decimal_places=2)

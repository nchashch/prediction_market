from django.db import models
from django.contrib.auth.models import User

# Private
class Portfolio(models.Model):
    name = models.CharField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cash = models.FloatField(default=0)

# Public
class Market(models.Model):
    name = models.CharField(max_length=256)
    b = models.FloatField(default=0.0)
    number_of_outcomes = models.IntegerField(default=1)
    start_date = models.DateField()
    end_date = models.DateField()
    resolved = models.BooleanField(default=False)

# Public
class Outcome(models.Model):
    market = models.ForeignKey(Market, on_delete=models.CASCADE)
    outcome_date = models.DateField()
    outstanding = models.IntegerField(default=0)
    probability = models.FloatField(default=0.0)
    winning = models.BooleanField(default=False)

# Private
class Position(models.Model):
    outcome = models.ForeignKey(Outcome, on_delete=models.CASCADE)
    market = models.ForeignKey(Market, on_delete=models.CASCADE)
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    volume = models.IntegerField(default=0)
    closed = models.BooleanField(default=False)

# Private
class Order(models.Model):
    outcome = models.ForeignKey(Outcome, on_delete=models.CASCADE)
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    position = models.ForeignKey(Position, on_delete=models.CASCADE, null=True)
    volume = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

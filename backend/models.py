from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
import datetime

# Private
class Portfolio(models.Model):
    name = models.CharField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cash = models.FloatField(default=0)

# Public
class Market(models.Model):
    name = models.CharField(max_length=256)
    b = models.FloatField(default=0.0)
    number_of_outcomes = models.IntegerField(null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    resolved = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        Outcome.objects.all()
        base = self.start_date
        number_of_outcomes = (self.end_date - self.start_date).days
        self.number_of_outcomes = number_of_outcomes
        date_list = [base + datetime.timedelta(days=x) for x in range(0, self.number_of_outcomes+1)]
        P = 1/number_of_outcomes
        super(Market, self).save(*args, **kwargs)
        for date in date_list:
            outcome = Outcome(
                market = self,
                outcome_date = date,
                outstanding = 0,
                probability = P)
            outcome.save()

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

    def save(self, *args, **kwargs):
        portfolio = Portfolio.objects.get(id=self.portfolio.id)
        outcomes = Outcome.objects.filter(market=self.outcome.market)
        super(Order, self).save(*args, **kwargs)
        try:
            position = Position.objects.get(outcome=self.outcome.id, portfolio=self.portfolio.id)
            position.volume += self.volume
            position.save()
        except ObjectDoesNotExist:
            position = Position(
                outcome = self.outcome,
                market = self.outcome.market,
                portfolio = self.portfolio,
                volume = self.volume,
                closed = False,
            )
            position.save()
        self.position = position

def cost_function(b, amounts):
    return b * math.log(sum((math.e ** (a / b) for a in amounts)))

def probabilities(b, amounts):
    s = sum((math.e ** (a/b) for a in amounts))
    return [(math.e ** (a/b)) / s for a in amounts]

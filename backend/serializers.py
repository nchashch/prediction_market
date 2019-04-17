from rest_framework import serializers
from backend.models import Portfolio, Market, Outcome, Position, Order

class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ('id', 'name', 'user', 'cash')

class MarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Market
        fields = ('id', 'name', 'b', 'number_of_outcomes', 'start_date', 'end_date', 'resolved')

class OutcomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Outcome
        fields = ('id', 'market', 'outcome_date', 'outstanding', 'probability', 'winning')

class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = ('id', 'outcome', 'market', 'portfolio', 'volume', 'closed')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'portfolio', 'position', 'volume', 'timestamp')

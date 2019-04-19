from backend.models import Market, Portfolio, Outcome, Position, Order
from backend.serializers import MarketSerializer, PortfolioSerializer
from backend.serializers import OutcomeSerializer, PositionSerializer, OrderSerializer
from rest_framework import generics

class PortfolioList(generics.ListCreateAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class PortfolioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class MarketList(generics.ListCreateAPIView):
    queryset = Market.objects.all()
    serializer_class = MarketSerializer

class MarketDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Market.objects.all()
    serializer_class = MarketSerializer

class OutcomeList(generics.ListAPIView):
    queryset = Outcome.objects.all()
    serializer_class = OutcomeSerializer

class OutcomeDetail(generics.RetrieveAPIView):
    queryset = Outcome.objects.all()
    serializer_class = OutcomeSerializer

class PositionList(generics.ListAPIView):
    queryset = Position.objects.all()
    serializer_class = PositionSerializer

class PositionDetail(generics.RetrieveAPIView):
    queryset = Position.objects.all()
    serializer_class = PositionSerializer

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetail(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

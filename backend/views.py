from backend.models import Market
from backend.serializers import MarketSerializer
from rest_framework import generics

# class PortfolioList(generics.ListCreateAPIView):
#     queryset = Portfolio.objects.all()
#     serializer_class = PortfolioSerializer

# class PortfolioDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Portfolio.objects.all()
#     serializer_class = PortfolioSerializer


class MarketList(generics.ListCreateAPIView):
    queryset = Market.objects.all()
    serializer_class = MarketSerializer

class MarketDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Market.objects.all()
    serializer_class = MarketSerializer

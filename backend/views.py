from backend.models import Market, Portfolio, Outcome, Position, Order
from backend.serializers import MarketSerializer, PortfolioSerializer
from backend.serializers import OutcomeSerializer, PositionSerializer, OrderSerializer
from rest_framework.views import APIView, Response
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

class OutcomeList(APIView):
    def get(self, request):
        """
        This view should return a list of all the outcomes,
        if there is no 'market' keyword argument and
        all outcomes for a particular market if there is a 'market
        keyword argument.
        """
        market = request.GET.get('market', None)
        if market:
            outcomes = Outcome.objects.filter(market__id=market)
        else:
            outcomes = Outcome.objects.all()
        serializer = OutcomeSerializer(outcomes, many=True)
        return Response(serializer.data)

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

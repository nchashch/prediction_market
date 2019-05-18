from backend.models import Market, Portfolio, Outcome, Position, Order
from backend.serializers import MarketSerializer, PortfolioSerializer
from backend.serializers import OutcomeSerializer, PositionSerializer, OrderSerializer
from rest_framework.views import APIView, Response
from rest_framework import generics, permissions, status
from functools import reduce
from django.db.models import QuerySet

class PortfolioList(generics.ListCreateAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def get_queryset(self):
        return self.request.user.portfolios.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class PortfolioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PortfolioSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def get_queryset(self):
        return self.request.user.portfolios.all()

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
    serializer_class = PositionSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        portfolios = self.request.user.portfolios.all()
        positions = [portfolio.positions.all() for portfolio in portfolios]
        positions = reduce(QuerySet.union, positions)
        return positions

class PositionDetail(generics.RetrieveAPIView):
    serializer_class = PositionSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        portfolios = self.request.user.portfolios.all()
        positions = [portfolio.positions.all() for portfolio in portfolios]
        positions = reduce(QuerySet.union, positions)
        return positions

class OrderList(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def post(self, request):
        portfolios = Portfolio.objects.filter(owner=request.user)
        if request.data.get('portfolio'):
            serializer = OrderSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        if portfolios:
            data = { **request.data, 'portfolio': portfolios[0].id }
            print(data)
            serializer = OrderSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_queryset(self):
        portfolios = self.request.user.portfolios.all()
        orders = [portfolio.orders.all() for portfolio in portfolios]
        orders = reduce(QuerySet.union, orders)
        return orders

class OrderDetail(generics.RetrieveAPIView):
    serializer_class = OrderSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        portfolios = self.request.user.portfolios.all()
        orders = [portfolio.orders.all() for portfolio in portfolios]
        orders = reduce(QuerySet.union, orders)
        return orders

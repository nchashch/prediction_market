from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from backend import views

urlpatterns = [
    path('markets/', views.MarketList.as_view()),
    path('markets/<int:pk>/', views.MarketDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

from django.shortcuts import render
from rest_framework import viewsets
from .models import Season, Production
from .serializers import SeasonSerializer, ProductionSerializer

class SeasonView(viewsets.ModelViewSet):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

class ProductionView(viewsets.ModelViewSet):
    queryset = Production.objects.all()
    serializer_class = ProductionSerializer
from django.shortcuts import render
from rest_framework import viewsets
from .models import Season
from .serializers import SeasonSerializer

class SeasonView(viewsets.ModelViewSet):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer
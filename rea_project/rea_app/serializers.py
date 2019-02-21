from rest_framework import serializers
from .models import Season, Production


class ProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Production
        fields = ('id', 'season', 'title', 'photo_url', 'director', 'choreographer', 'musical_director', 'start_date', 'end_date', 'description')

class SeasonSerializer(serializers.ModelSerializer):
    productions = ProductionSerializer(many=True, read_only=True)
    class Meta:
        model = Season
        fields = ('id', 'name', 'year', 'productions')

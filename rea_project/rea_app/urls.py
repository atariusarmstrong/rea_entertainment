from django.urls import path, include 
from . import views 
from rest_framework import routers

router = routers.DefaultRouter()
router.register('season', views.SeasonView)
router.register('production', views.ProductionView)

urlpatterns = [
    path('', include(router.urls))
]
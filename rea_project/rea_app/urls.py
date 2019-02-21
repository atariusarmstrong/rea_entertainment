from django.urls import path, include 
from . import views 
from rest_framework import routers

router = routers.DefaultRouter()
router.register('season', views.SeasonView)

urlpatterns = [
    path('api/v1/', include(router.urls))
]
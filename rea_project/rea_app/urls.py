from django.urls import path, include 
from . import views 
from rest_framework import routers

router = routers.DefaultRouter()
router.register('seasons', views.SeasonView)
router.register('productions', views.ProductionView)
router.register('educationprograms', views.EducationProgramView)

urlpatterns = [
    path('', include(router.urls))
]
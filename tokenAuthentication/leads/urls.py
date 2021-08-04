from django.urls import path, include
from .api import LeadViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'api', LeadViewSet)
urlpatterns = [
    path('', include(router.urls)),
    ]
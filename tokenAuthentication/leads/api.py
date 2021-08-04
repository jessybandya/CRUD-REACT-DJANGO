from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Lead
from .permissions import *
class LeadViewSet(viewsets.ModelViewSet):
    serializer_class = LeadSerializer
    queryset = Lead.objects.all() 
    permission_classes = (IsAuthenticated,PostOwnLead,)
    
    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner = self.request.user) 
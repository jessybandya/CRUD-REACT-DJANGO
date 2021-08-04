from django.db import models
#from accounts.models import User
#from django.contrib.auth.models import User
#from django.conf import settings
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    message = models.CharField(max_length=255)
    owner = models.ForeignKey(User, related_name='leads', on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Season(models.Model):
    name: models.CharField(max_length=60)
    year: models.IntegerField(
        validators=[
            MinValueValidator(4),
            MaxValueValidator(4)
        ])
    
    def __str__(self):
        return self.name
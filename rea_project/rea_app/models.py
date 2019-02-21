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

class Production(models.Model):
    title: models.CharField(max_length=120)
    start_date: models.DateField()
    end_date: models.DateField()
    description: models.TextField()
    season = models.ForeignKey(Season, on_delete=models.CASCADE, related_name="productions")

    def __str__(self):
        return self.title
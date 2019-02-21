from django.db import models

# Create your models here.
class Season(models.Model):
    name = models.CharField(max_length=60)
    year = models.IntegerField()
    
    def __str__(self):
        return self.name

class Production(models.Model):
    season = models.ForeignKey(Season, on_delete=models.CASCADE, related_name="productions")
    title = models.CharField(max_length=120)
    photo_url = models.TextField(null=True)
    director = models.CharField(max_length=120, null=True)
    choreographer = models.CharField(max_length=120, blank=True)
    musical_director = models.CharField(max_length=120, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()
    
    def __str__(self):
        return self.title

class EducationProgram(models.Model):
    title = models.CharField(max_length=60)
    instructor = models.CharField(max_length=120)
    location = models.CharField(max_length=120)
    date = models.DateField()
    time = models.TimeField()
    price = models.IntegerField()
    description = models.TextField()
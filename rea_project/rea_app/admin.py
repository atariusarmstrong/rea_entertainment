from django.contrib import admin
from .models import Season, Production, EducationProgram

# Register your models here.
admin.site.register(Season)
admin.site.register(Production)
admin.site.register(EducationProgram)
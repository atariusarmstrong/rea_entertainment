# Generated by Django 2.1.5 on 2019-02-21 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rea_app', '0003_production_photo_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='production',
            name='director',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='production',
            name='photo_url',
            field=models.TextField(null=True),
        ),
    ]

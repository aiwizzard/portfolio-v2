# Generated by Django 4.0.4 on 2022-05-24 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
from django.db import models
from django.contrib.auth.models import User

static_url = "http://localhost:8000"

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.ImageField(blank=True, null=True)
    name = models.CharField(max_length=50)
    socials = models.ManyToManyField('Social')
    email = models.EmailField()
    phone = models.EmailField()
    location = models.CharField(max_length=250)
    projects = models.ManyToManyField('Project')
    experiences = models.ManyToManyField('Experience')
    services = models.ManyToManyField('Service')

    @property
    def image_url(self):
        if self.profile_image:
            return static_url + self.profile_image.url
        return ""


class Social(models.Model):
    name = models.CharField(max_length=50)
    link = models.URLField()

class Project(models.Model):
    title = models.CharField(max_length=40)
    body = models.TextField()
    image = models.ImageField(blank=True, null=True)
    tags = models.ManyToManyField('Tag')

class Tag(models.Model):
    name = models.CharField(max_length=50)

class Service(models.Model):
    title = models.CharField(max_length=40)
    body = models.TextField()


class Experience(models.Model):
    designation = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    start = models.CharField(max_length=40)
    end = models.CharField(max_length=40)
    duties = models.ManyToManyField('Duty')

class Duty(models.Model):
    name = models.CharField(max_length=250)


class Contact(models.Model):
    name = models.CharField(max_length=40)
    contact = models.CharField(max_length=50)
    message = models.TextField()
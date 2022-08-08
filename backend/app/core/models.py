from django.db import models
from django.contrib.auth.models import User

# static_url = "http://localhost:8000"
# static_url = "http://0.0.0.0"
static_url = "https://ajmalk.com"

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.ImageField(blank=True, null=True)
    resume = models.FileField(blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    socials = models.ManyToManyField('Social', blank=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    location = models.CharField(max_length=250, blank=True, null=True)
    projects = models.ManyToManyField('Project', blank=True)
    experiences = models.ManyToManyField('Experience', blank=True)
    services = models.ManyToManyField('Service', blank=True)

    @property
    def image_url(self):
        if self.profile_image:
            return static_url + self.profile_image.url
        return ""

    def __str__(self) -> str:
        if self.name:
            return self.name
        elif self.email:
            return self.email
        return self.user.username


class Social(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    link = models.URLField(blank=True, null=True)

    def __str__(self) -> str:
        if self.name:
            return self.name
        return ""

class Project(models.Model):
    title = models.CharField(max_length=40, blank=True, null=True)
    body = models.TextField(blank=True, null=True)
    link = models.URLField(max_length=200, blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
    tags = models.ManyToManyField('Tag', blank=True)

    @property
    def image_url(self):
        if self.image:
            return static_url + self.image.url
        return ""

    def __str__(self) -> str:
        if self.title:
            return self.title
        return ""

class Tag(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self) -> str:
        if self.name:
            return self.name
        return ""

class Service(models.Model):
    title = models.CharField(max_length=40, blank=True, null=True)
    body = models.TextField(blank=True, null=True)

    def __str__(self) -> str:
        if self.title:
            return self.title
        return ""


class Experience(models.Model):
    designation = models.CharField(max_length=50, blank=True, null=True)
    company = models.CharField(max_length=50, blank=True, null=True)
    start = models.CharField(max_length=40, blank=True, null=True)
    end = models.CharField(max_length=40, blank=True, null=True)
    duties = models.ManyToManyField('Duty', blank=True)

    def __str__(self) -> str:
        if self.designation and self.company:
            return f"{self.designation}-{self.company}"
        return ""

class Duty(models.Model):
    name = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self) -> str:
        if self.name:
            return self.name
        return ""


class Contact(models.Model):
    name = models.CharField(max_length=40, blank=True, null=True)
    contact = models.CharField(max_length=50, blank=True, null=True)
    message = models.TextField(blank=True, null=True)

    def __str__(self) -> str:
        if self.name and self.contact and self.message:
            return f"{self.name}-{self.contact}-{self.message}"
        if self.name:
            return self.name
        return ""
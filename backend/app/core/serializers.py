from .models import Contact, Duty, Experience, Profile, Project, Service, Social, Tag
from rest_framework import serializers

class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = "__all__"

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"

class DutySeriallizer(serializers.ModelSerializer):
    class Meta:
        model = Duty
        fields = "__all__"

class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer("tags", many=True)
    class Meta:
        model = Project
        fields = ["id", "title", "description", "body", "image_url", "tags"]

class ExperienceSerializer(serializers.ModelSerializer):
    duties = DutySeriallizer("duties", many=True)
    class Meta:
        model = Experience
        fields = "__all__"

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

class HomeSerializer(serializers.ModelSerializer):
    socials = SocialSerializer("socials", many=True)
    projects = ProjectSerializer("projects", many=True)
    experiences = ExperienceSerializer(read_only=True, many=True) # same as above
    services = ServiceSerializer(many=True)
    
    class Meta:
        model = Profile
        fields = ["id", "image_url", "name", "bio", "socials", "email", "phone", "location", "projects", "experiences", "services"]
        depth = 1


class SubmitContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"
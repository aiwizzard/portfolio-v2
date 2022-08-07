from .models import Profile, Project
from rest_framework import views
from . import mixins, serializers

class HomeApi(views.APIView, mixins.HttpResponseMixin):
    def get(self, request, *args, **kwargs):
        qureyset = Profile.objects.all().first()
        serializer = serializers.HomeSerializer(instance=qureyset)
        return self.success_response(message="data fetched successfully", data=serializer.data)


class SubmitContactApi(views.APIView, mixins.HttpResponseMixin):
    def post(self, request, *args, **kwargs):
        serializer = serializers.SubmitContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return self.success_response(message="Send Successfully", data=serializer.data)
        return self.error_response(message="Error sending info", error=serializer.errors)

class ProjectDetailApi(views.APIView, mixins.HttpResponseMixin):
    def get(self, request, *args, **kwargs):
        instance = Project.objects.filter(id=kwargs.get("id"))
        if not instance:
            return self.error_response(message="No project with this id")
        serializer = serializers.ProjectSerializer(instance=instance.first())
        return self.success_response(message="Data fetched successfully", data=serializer.data)

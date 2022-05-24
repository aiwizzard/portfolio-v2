from .models import Profile
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

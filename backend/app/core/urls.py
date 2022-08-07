from django.urls import path
from . import views

urlpatterns = [
    path("home/", views.HomeApi.as_view()),
    path("submit_contact/", views.SubmitContactApi.as_view()),
    path("projects/<slug:id>/", views.ProjectDetailApi.as_view()),
]
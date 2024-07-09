from django.urls import path
from .views import MyTokenObtainPairView, getNotes

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    # path("", views.getRoutes),
    path("notes/", getNotes),
    path("api/token/", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

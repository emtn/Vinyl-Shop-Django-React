from django.urls import path
from base.views import users_views as views


urlpatterns = [
    path('', views.getUsers, name='users'),
    path('register/', views.registerUser, name='register'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='users-profile'),
    path('profile/update/', views.updateUserProfile, name='users-profile'),
    path('newsletter/', views.sendNewsletter, name='newsletter'),
    path('delete-user/<str:pk>/', views.deleteUserProfile, name='delete-user'),
    path('staff-user/<str:pk>/', views.staffUserProfile, name='staff-user'),

]
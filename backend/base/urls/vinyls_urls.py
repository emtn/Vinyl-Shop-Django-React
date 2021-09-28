from django.urls import path
from base.views import vinyls_views as views


urlpatterns = [
    path('', views.getVinyls, name='vinyls'),
    path('add-vinyl/', views.addVinyl, name='add-vinyl'),
    path('edid-vinyl/<str:pk>/', views.editVinyl, name='edid-vinyl'),
    path('delete-vinyl/<str:pk>/', views.deleteVinyl, name='delete-vinyl'),
    path('<str:pk>/reviews/', views.createVinylReview, name='create-review'),
    path('<str:pk>/', views.getVinyl, name='vinyl'),

    # path('filter/type/<str:type>/', views.getVinylByType, name='vinylByType'),
    # path('filter/price/<str:price1>/<str:price2>/', views.getVinylByPrice, name='vinylByPrice'),
    # path('filter/rating/<str:rating>/', views.getVinylByRating, name='vinylByRating'),
    # path('filter/year/<str:year1>/<str:year2>/', views.getVinylByRating, name='vinylByRating'),
    
    # path('filter/typeandprice/<str:type>/<str:price1>/<str:price2>/', views.getVinylsByTypeAndPrice, name='vinylByType'),
]
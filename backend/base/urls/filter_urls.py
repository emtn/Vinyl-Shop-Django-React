from django.urls import path
from base.views import filter_views as views


urlpatterns = [
    
    path('',views.VinylList.as_view()),
    path('categories/', views.getVinylCategories, name='categories'),
    path('titles/', views.getTitles, name='titles'),
    path('title/<str:title>/', views.getVinylByTitle, name='vinyl-by-title'),

    # path('artist/<str:artist>/', views.getVinylByArtist, name='vinylByArtist'),
    # path('category/<str:category>/', views.getVinylByCategory, name='vinylByCategory'),
    # path('releasedate/<str:releasedate>/', views.getVinylByDate, name='vinylByDate'),
    # path('rating/<str:rating>/', views.getVinylByRating, name='vinylByRating'),
    # path('price/<str:price1>/<str:price2>/', views.getVinylByPrice, name='vinylByPrice'),
    # path('stock/<str:stock>/', views.getVinylByStock, name='vinylByStock'),

    # path('multi/<str:type>/<str:price1>/<str:price2>/', views.getVinylsByTypeAndPrice, name='vinylByType'),
]

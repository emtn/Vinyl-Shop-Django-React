
from django.contrib import admin
from django.urls import path, include,re_path
from django.conf import settings
from django.conf.urls.static import static

from base.views import users_views as views

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('api/', include('base.urls')),
    path ( 'api/vinyls/', include('base.urls.vinyls_urls')),
    path ( 'api/users/', include('base.urls.users_urls')),
    path ( 'api/orders/', include('base.urls.orders_urls')),
    path ( 'api/filters/', include('base.urls.filter_urls')),
    # path ( 'api/chat/', include('base.urls.chat_urls')),
    # path ( 'activate/<slug:uidb64>/<slug:token>',views.activate, name='activate'),
]

#to add a root for images
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
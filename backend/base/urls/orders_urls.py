from django.urls import path
from base.views import orders_views as views


urlpatterns = [
    path('add/',views.addOrderItems,name='add-order'),
    path('myorders/',views.getMyOrders,name='my-orders'),
    path('<str:pk>/',views.getOrderById,name='get-order'),
    path('<str:pk>/pay',views.updateOrderToPaid,name='pay'),

]   

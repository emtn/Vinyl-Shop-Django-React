from django.contrib import admin
from .models import Vinyl, Review, Order, OrderItem, ShippingAddress,Message
#to be able to crud models from admin panel
admin.site.register(Vinyl)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(Message)

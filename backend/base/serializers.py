from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Order, OrderItem, Review, ShippingAddress, Vinyl




class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin']
#to serialize the isAdmin field
    def get_isAdmin(self,obj):
        return obj.is_staff

#to serialize the name field
    def get_name(self, obj):
        #name attribute is the first_name of user. if its null the email becomes the name
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializer):
    """
    After login
    returns a JWT token for the authentication system
    """
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'



class VinylSerializer(serializers.ModelSerializer):
    
    reviews = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Vinyl
        fields = '__all__'

    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    orderItems = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
   
    class Meta:

        model = Order
        fields = '__all__'

    def get_user(self,obj):
        items = obj.user
        serializer = UserSerializer(items,many = False)
        return (serializer.data)

    def get_orderItems(self,obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items,many = True)
        return (serializer.data)

    def get_shippingAddress(self,obj):
        try:
            address=ShippingAddressSerializer(obj.shippingaddress , many = False).data
        except:
            address=False
        return address
    

    

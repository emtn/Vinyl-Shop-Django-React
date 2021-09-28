from datetime import datetime
from rest_framework.decorators import api_view, permission_classes
from rest_framework.fields import DateTimeField
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from base.serializers import VinylSerializer,OrderSerializer
from base.models import Order, OrderItem,Vinyl,ShippingAddress

from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    """

    View to post all the details of an Order
    and remove the qty from the Stock
    'orderItems' [id,qty,price]
    'paymentMethod'
    'taxPrice'
    'ShippingPrice'
    'totalPrice'
    'ShippingAddress' ['address','city','postalCode','country','shippingPrice']

    """

    user = request.user
    data = request.data

    orderItems = data['orderItems']
    if orderItems and len(orderItems)==0:
        return Response({'detail': 'No order items'},status=status.HTTP_400_BAD_REQUEST)

    else:
        order = Order.objects.create(
            user = user ,
            paymentMethod=data['paymentMethod'],
            # taxPrice=data['taxPrice'],
            # shippingPrice=data['shippingPrice'],
            totalPrice=data['totalPrice'],
        )

        shipping =ShippingAddress.objects.create(
            order=order,
            address= data['address'],
            city = data['city'], 
            postalCode = data['postalCode'],
            country= data['country'],
            # shippingPrice= data['ShippingAddress']['shippingPrice'],
        )
        try:
            for i in orderItems:
                vinyl = Vinyl.objects.get(id=i["id"]) 

                item = OrderItem.objects.create(
                    vinyl = vinyl,
                    order = order,
                    name = vinyl.title, 
                    qty = i['qty'],
                    price = i['price']
                )
        except:
            return Response("there was an error")
        vinyl.countInStoke -= int(item.qty) #added int and Stoke...
        vinyl.save()
        print(i)
        serializer = OrderSerializer(order,many = False)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    """
    
    """
    user = request.user
    orders = user.order_set.all()
    serializer = OrderSerializer(orders,many = True)
    return Response(serializer.data)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request,pk):
    user= request.user
    
    try:
        order = Order.objects.get(id=pk)
    except:
        return Response({'details':'Order doesnot exist'},status=status.HTTP_400_BAD_REQUEST)
    if user.is_staff or order.user == user:
        serializer = OrderSerializer(order, many= False)
        return Response(serializer.data)
    else:
        return Response({'detail':'Not Authorizer'},status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToPaid(request,pk):
    order = Order.objects.get(id=pk)

    order.isPaid = True
    order.paidAt = datetime.now()
    order.save()
    return Response ('Order was paid')
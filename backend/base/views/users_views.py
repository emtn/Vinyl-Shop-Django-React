# from django.contrib.auth.models import update_last_login
# from django.shortcuts import render
# from django.contrib.sites.shortcuts import get_current_site
# from django.template.loader import render_to_string
# from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
# from django.utils.encoding import force_bytes, force_text
# from base.tokens import account_activation_token
#from rest_framework.pagination import PageNumberPagination
from django.core.mail import EmailMessage

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.serializers import UserSerializerWithToken,UserSerializer


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        print(serializer.items())
        for k, v in serializer.items():
            data[k] = v
            
        return data

class MyTokenObtainPairView(TokenObtainPairView):
   
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
      
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        print(data)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['GET'])
# def activate(request, uidb64, token):
#     try:
#         uid = force_text(urlsafe_base64_decode(uidb64))
#         user = User.objects.get(pk=uid)
#     except(TypeError, ValueError, OverflowError, User.DoesNotExist):
#         user = None
#     if user is not None and account_activation_token.check_token(user, token):
#         user.is_active = True
#         user.save()
#         serializer = UserSerializerWithToken(user, many=False)
#         return Response(serializer.data)
#     else:
#         return Response()

# @api_view(['POST'])
# def registerUser(request):
#     data = request.data
#     try:
#         user = User.objects.create(
#             first_name=data['name'],
#             username=data['email'],
#             email=data['email'],
#             password=make_password(data['password']),
#             is_active = False
#         )
#         current_site = get_current_site(request)
#         uid = urlsafe_base64_encode(force_bytes(user.pk))
#         token = account_activation_token.make_token(user)
#         subject = 'Activate your blog account.'
#         # message = f"Welcome to the Vinyl store {account_activation_token.make_token(user)}"
#         message = render_to_string('acc_active_email.html', {
#                 'user': user,
#                 'domain': current_site.domain,
#                 'uid':uid,
#                 'token':token,
#             })
#         to_email = user.email
#         email = EmailMessage(subject , message, to=[to_email])
#         email.send()
#         message = {'detail' : 'Check your email to Activate your account'}
#     except:
#         message = {'detail': 'There was an error'}
#     return Response(message, status=status.HTTP_400_BAD_REQUEST)


        
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    
    user = request.user

    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    if data['password']!= '':
        user.password = data['password']
    user.save()
    serializer = UserSerializerWithToken(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many= True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def deleteUserProfile(request, pk):
    user = User.objects.get(id=pk)
    user.delete()

    return Response('User deleted')


@api_view(['POST'])
@permission_classes([IsAdminUser])
def staffUserProfile(request, pk):
    user = User.objects.get(id=pk)
    user.is_staff = True
    user.save()
    
    return Response('User is staff')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):

    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()
    return Response(serializer.data)



@api_view(['POST'])
def sendNewsletter(request):
    email = request.data['email']

    subject = f"Welcome to the Best vinyl store in Space"
    message = f"Thanks for signing in to our Newsletter here are some new "
    to_email = email
    try:
        email = EmailMessage(subject , message, to=[to_email])
        email.send()
        message = {'detail' : 'email sent'}
        return Response(message)
    except:
        message = {'detail': 'There was an error'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


# from django.contrib.auth.models import update_last_login
# from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Vinyl, Review
from base.serializers import VinylSerializer

from rest_framework import status

@api_view(['GET'])
def getVinyls(request):
    vinyls = Vinyl.objects.all()
    serializer = VinylSerializer(vinyls,many = True) #many to say how many data is serialized
    #serializer.data has the products
    return Response(serializer.data)

# @api_view(['GET'])
# def getVinyl(request, pk):

#     vinyl = Vinyl.objects.get(id=pk)
#     serializer = VinylSerializer(vinyl, many= False)
#     return Response(serializer.data)

@api_view(['GET'])
def getVinyl(request, pk):

    if request.method == 'GET':

        data = request.data
        vinyl = Vinyl.objects.get(id=pk)
        serializer = VinylSerializer(vinyl, many= False)
        return Response(serializer.data)




@api_view(['POST'])
@permission_classes([ IsAdminUser])
def addVinyl(request):
    user = request.user
    data = request.data
    
    vinyl = Vinyl.objects.create(
        user = user,
        title = data['title'],
        artist = data['artist'],
        label = data['label'],
        image = data['image'],
        category = data['category'],
        description = data['description'],
        #releaseDate = data['releaseDate'],
        price = data['price'],
        countInStoke = data['countInStoke'],
    )
    vinyl.save()
    return Response('Vinyl Added')




@api_view(['POST'])
@permission_classes([ IsAdminUser])
def editVinyl(request, pk):
    vinyl = Vinyl.objects.get(id=pk)
    data = request.data

    vinyl.title = data['title']
    vinyl.artist = data['artist']
    vinyl.label = data['label']
    vinyl.image = data['image']
    vinyl.category = data['category']
    vinyl.description = data['description']
    vinyl.releaseDate = data['releaseDate']
    vinyl.price = data['price']
    vinyl.countInStoke = data['countInStoke']

    vinyl.save()

    return Response('Vinyl updated')


@api_view(['POST'])
@permission_classes([ IsAdminUser])
def deleteVinyl(request, pk):
    vinyl = Vinyl.objects.get(id=pk)
    vinyl.delete()

    return Response('Vinyl deleted')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createVinylReview(request, pk):
    user = request.user
    vinyl = Vinyl.objects.get(id=pk)
    data = request.data

    # if review already exist
    alreadyExists = vinyl.review_set.filter(user=user).exists()

    if alreadyExists:
        content = {
            'details':'Product already reviewed'
        }

        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    
    # no rating or 0
    elif data['rating'] == 0:
        content = {
            'details':'Please select a rating'
        }

        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # create review
    else:
        review = Review.objects.create(
            user = user,
            vinyl = vinyl,
            name = user.username,
            rating = data['rating'],
            comment = data['comment'],
        )

        reviews = vinyl.review_set.all()
        vinyl.numReviews = len(reviews)

        total = 0 
        for rev in reviews:
            total += rev.rating
        
        vinyl.rating = total / len(reviews)
        vinyl.save()

        return Response('Review Added')

    

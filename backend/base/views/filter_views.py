from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
import django_filters
from base.models import Vinyl
from base.serializers import VinylSerializer
from django_filters.rest_framework import DjangoFilterBackend



class VinylList(generics.ListAPIView):
    """
    A filter list that returns all vinyls based on the
    filters that were asked from the frontend
    
    """
    # permission_classes = [IsAuthenticated]

    queryset = Vinyl.objects.all()
    serializer_class = VinylSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = filter_fields = {
        'price': ['lte'],
        'category': ['exact'],
        'rating' : ['lte'],
    }


@api_view(['GET'])
def getVinylCategories(request):
        return Response(set(Vinyl.objects.values_list('category',flat = True)))
        
@api_view(['GET'])
def getTitles(request):
        return Response(set(Vinyl.objects.values_list('title',flat = True)))

@api_view(['GET'])
def getVinylByTitle(request, title):

    data = request.data
    vinyl = Vinyl.objects.get(title=title)
    serializer = VinylSerializer(vinyl, many= False)
    return Response(serializer.data)
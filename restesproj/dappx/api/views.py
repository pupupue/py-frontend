
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from dappx.models import *
from rest_framework.response import Response
from .serializers import *
# Create your views here.

class CellListView(ListAPIView):
    queryset = Cell.objects.all()
    serializer_class = CellSerializer

class CellDetailView(RetrieveAPIView):
    queryset = Cell.objects.all()
    serializer_class = CellSerializer
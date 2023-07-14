from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import UserData
from .serializers import UserDataSerializer
from django.shortcuts import render
import json

# Create your views here.


@api_view(['GET'])
def getUsers(request):
    if request.method == 'GET':
        data = UserData.objects.all()
        # data = json.dumps(data)
        serializer = UserDataSerializer(data, many=True)
        # return render(request, 'index.html', {"name": "string"})
        return JsonResponse(serializer.data, safe=False)
    return render(request, 'index.html')


@api_view(['POST'])
def entryForm(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data['Name']
        age = data['Age']
        UserData.objects.create(
            name=name,
            age=age,
        )
        data = UserData.objects.all()
        serializer = UserDataSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)
    return render(request, 'index.html')

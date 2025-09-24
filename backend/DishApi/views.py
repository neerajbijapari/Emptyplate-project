from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Dish
from .serializers import DishSerializer

@api_view(['GET'])
def DishList(request):
    all_dishes = Dish.objects.all()
    data = DishSerializer(all_dishes, many=True).data
    return Response({"list": data})


@api_view(['POST'])
def DishAdd(request):
    serializer = DishSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Dish added!", "dish": serializer.data}, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def DishUpdate(request, id):        
    try:
        dish = Dish.objects.get(id=id)
    except Dish.DoesNotExist:
        return Response({"error": "Dish not found"}, status=404)

    serializer = DishSerializer(dish, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Dish updated!", "dish": serializer.data})
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def DishDelete(request, id):        
    deleted, _ = Dish.objects.filter(id=id).delete()
    if deleted:
        return Response({"message": "Dish deleted!"})
    return Response({"error": "Dish not found"}, status=404)


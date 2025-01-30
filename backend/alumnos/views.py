from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Alumno, Grado, Seccion
from .serializers import AlumnoSerializer, GradoSerializer, SeccionSerializer
from django.shortcuts import get_object_or_404
from django.db import IntegrityError

# AGREGAR ALUMNO
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def crear_alumno(request):
    try:
        serializer = AlumnoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    except IntegrityError:
        return Response({"error": "Error de integridad en la base de datos"}, status=500)
    except Exception as e:
        return Response({"error": str(e)}, status=500)

# AGREGAR GRADO
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def crear_grado(request):
    try:
        serializer = GradoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    except Exception as e:
        return Response({"error": str(e)}, status=500)

# AGREGAR SECCIÓN
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def crear_seccion(request):
    try:
        serializer = SeccionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    except Exception as e:
        return Response({"error": str(e)}, status=500)

# CONSULTAR ALUMNOS POR GRADO
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def consultar_alumnos_por_grado(request, idGrado):
    try:
        alumnos = Alumno.objects.filter(grado_id=idGrado)
        if not alumnos.exists():
            return Response({"mensaje": "No hay alumnos en este grado"}, status=404)
        serializer = AlumnoSerializer(alumnos, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({"error": str(e)}, status=500)

# CONSULTAR UN ALUMNO POR ID
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def consultar_alumno(request, id):
    alumno = get_object_or_404(Alumno, id=id)
    serializer = AlumnoSerializer(alumno)
    return Response(serializer.data)

# LISTAR TODOS LOS ALUMNOS
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listar_alumnos(request):
    alumnos = Alumno.objects.all()
    serializer = AlumnoSerializer(alumnos, many=True)
    return Response(serializer.data)


# LISTAR TODOS LOS GRADOS
@api_view(['GET'])
@permission_classes([IsAuthenticated])  
def listar_grados(request):
    grados = Grado.objects.all()
    serializer = GradoSerializer(grados, many=True)
    return Response(serializer.data)

# LISTAR TODAS LAS SECCIONES
@api_view(['GET'])
@permission_classes([IsAuthenticated])  
def listar_secciones(request):
    secciones = Seccion.objects.all()
    serializer = SeccionSerializer(secciones, many=True)
    return Response(serializer.data)
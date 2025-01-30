from rest_framework import serializers
from .models import Alumno, Grado, Seccion

# Serializador para Grado
class GradoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grado
        fields = ['id', 'nombre']

# Serializador para Sección
class SeccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seccion
        fields = ['id', 'nombre']

# Serializador para Alumno
class AlumnoSerializer(serializers.ModelSerializer):
    grado = serializers.PrimaryKeyRelatedField(queryset=Grado.objects.all())  # para usar el id del grado
    seccion = serializers.PrimaryKeyRelatedField(queryset=Seccion.objects.all())  # para usar el id de la sección

    class Meta:
        model = Alumno
        fields = ['id', 'nombre', 'fecha_nacimiento', 'nombre_padre', 'nombre_madre', 'grado', 'seccion', 'fecha_ingreso']

    def to_representation(self, instance):
        # Muestra el nombre del grado y sección en lugar de sus id.
        representation = super().to_representation(instance)
        representation['grado'] = instance.grado.nombre
        representation['seccion'] = instance.seccion.nombre
        return representation
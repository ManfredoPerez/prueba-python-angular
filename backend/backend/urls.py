
from django.contrib import admin
from django.urls import path
from alumnos.views import (
    crear_alumno, consultar_alumno, listar_alumnos, listar_grados, listar_secciones,
    crear_grado, crear_seccion, consultar_alumnos_por_grado
)


urlpatterns = [
    path('admin/', admin.site.urls),
    
     # Rutas para Alumnos
    path('crear-alumno/', crear_alumno),
    path('consultar-alumno/<int:id>/', consultar_alumno),
    path('listar-alumnos/', listar_alumnos),

    # Rutas para Grados y Secciones
    path('crear-grado/', crear_grado),
    path('crear-seccion/', crear_seccion),
    path('listar-grados/', listar_grados),  # Nueva ruta para ver grados
    path('listar-secciones/', listar_secciones),

    # Ruta para consultar alumnos por grado
    path('consultar-alumnos-grado/<int:idGrado>/', consultar_alumnos_por_grado),
]

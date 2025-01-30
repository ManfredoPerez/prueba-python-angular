from django.db import models

# CREACION DEL MODELO GRADO 
class Grado(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

    class Meta:
        db_table = 'grado'

# CREACION DEL MODELO SECCION 
class Seccion(models.Model):
    nombre = models.CharField(max_length=10)

    def __str__(self):
        return self.nombre

    class Meta:
        db_table = 'seccion'

# CREACION DEL MODELO ALUMNOS
class Alumno(models.Model):
    nombre = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    nombre_padre = models.CharField(max_length=100)
    nombre_madre = models.CharField(max_length=100)
    grado = models.ForeignKey(Grado, on_delete=models.CASCADE)
    seccion = models.ForeignKey(Seccion, on_delete=models.CASCADE)
    fecha_ingreso = models.DateField()

    def __str__(self):
        return self.nombre

    class Meta:
        db_table = 'alumnos'

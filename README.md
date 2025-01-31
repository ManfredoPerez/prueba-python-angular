# Sistema de Gestión de Alumnos

Este preuba es un sistema de gestión de alumnos desarrollado con **Django** (backend) y **Angular** (frontend). Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre alumnos, grados y secciones, además de incluir funcionalidades como búsqueda y filtrado.

---

## **Tecnologías Utilizadas**

### Backend (Django)
- **Framework**: Django
- **Base de datos**: MySQL
- **Autenticación**: Basic Authentication
- **APIs**: RESTful
- **Herramientas**:
  - Django REST Framework
  - MySQL Connector

### Frontend (Angular)
- **Framework**: Angular
- **Estilos**: Bootstrap
- **Funcionalidades**:
  - Formularios reactivos
  - Búsqueda y filtrado
  - Consumo de APIs RESTful
- **Herramientas**:
  - Angular CLI
  - HttpClientModule
  - FormsModule

---

## **Funcionalidades**

### Backend
- **Alumnos**:
  - Crear un nuevo alumno.
  - Listar todos los alumnos.
  - Consultar alumnos por grado.
  - Ver detalles de un alumno.
- **Grados**:
  - Crear un nuevo grado.
  - Listar todos los grados.
- **Secciones**:
  - Crear una nueva sección.
  - Listar todas las secciones.

### Frontend
- **Alumnos**:
  - Formulario para crear un nuevo alumno.
  - Lista de todos los alumnos con opción de búsqueda.
  - Filtrado de alumnos por grado.
- **Grados**:
  - Formulario para crear un nuevo grado.
- **Secciones**:
  - Formulario para crear una nueva sección.

---

## **Resumen de Endpoints**

A continuación se detallan los endpoints disponibles en el backend:

| Acción                     | Método | URL                                             |
|----------------------------|--------|-------------------------------------------------|
| Crear Grado                | POST   | `http://localhost:8000/crear-grado/`            |
| Crear Sección              | POST   | `http://localhost:8000/crear-seccion/`          |
| Crear Alumno               | POST   | `http://localhost:8000/crear-alumno/`           |
| Consultar Alumno por ID    | GET    | `http://localhost:8000/consultar-alumno/{id}/`  |
| Listar Todos los Alumnos   | GET    | `http://localhost:8000/listar-alumnos/`         |
| Consultar Alumnos por Grado| GET    | `http://localhost:8000/consultar-alumnos-grado/{idGrado}/` |
| Listar Todos los Grados    | GET    | `http://localhost:8000/listar-grados/`          |
| Listar Todas las Secciones | GET    | `http://localhost:8000/listar-secciones/`       |

---

## **Pruebas**
**Listado de alumnos**

![image_alt](https://github.com/ManfredoPerez/prueba-python-angular/blob/feature/ElfegoPerez/frontend/src/assets/Listado%20de%20alumnos.png?raw=true)

**Agregar alumnos**

![image_alt](https://github.com/ManfredoPerez/prueba-python-angular/blob/feature/ElfegoPerez/frontend/src/assets/Agregar%20alumno.png?raw=true)

**Consultar alumno por grado**

![image_alt](https://github.com/ManfredoPerez/prueba-python-angular/blob/feature/ElfegoPerez/frontend/src/assets/Consultar%20alumno.png?raw=true)

**Pruebas en Postman**

![image_alt](https://github.com/ManfredoPerez/prueba-python-angular/blob/feature/ElfegoPerez/frontend/src/assets/Prueba%20postman.png?raw=true)

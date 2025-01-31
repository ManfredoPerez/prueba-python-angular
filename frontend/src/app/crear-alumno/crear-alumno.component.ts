import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../servicios/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {
  alumno = {
    nombre: '',
    fecha_nacimiento: '',
    nombre_padre: '',
    nombre_madre: '',
    grado: '',
    seccion: '',
    fecha_ingreso: ''
  };
  grados: any[] = [];
  secciones: any[] = [];

  grado = { nombre: '' };
  seccion = { nombre: '' };

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.cargarGrados();
    this.cargarSecciones();
  }

  cargarGrados() {
    this.alumnoService.listarGrados().subscribe(response => {
      this.grados = response;
    });
  }

  cargarSecciones() {
    this.alumnoService.listarSecciones().subscribe(response => {
      this.secciones = response;
    });
  }

  onSubmit() {
    this.alumnoService.crearAlumno(this.alumno).subscribe(response => {
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Alumno creado exitosamente',
        confirmButtonColor: '#3085d6'
      }).then(() => {
        this.limpiarFormulario();
      });
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al crear el alumno',
        confirmButtonColor: '#d33'
      });
    });
  }

  agregarGrado() {
    this.alumnoService.crearGrado(this.grado).subscribe(response => {
      this.cargarGrados();
      Swal.fire('Éxito', 'Grado agregado correctamente', 'success');
      this.grado.nombre = '';
    }, error => {
      Swal.fire('Error', 'No se pudo agregar el grado', 'error');
    });
  }

  agregarSeccion() {
    this.alumnoService.crearSeccion(this.seccion).subscribe(response => {
      this.cargarSecciones();
      Swal.fire('Éxito', 'Sección agregada correctamente', 'success');
      this.seccion.nombre = '';
    }, error => {
      Swal.fire('Error', 'No se pudo agregar la sección', 'error');
    });
  }

  limpiarFormulario() {
    this.alumno = {
      nombre: '',
      fecha_nacimiento: '',
      nombre_padre: '',
      nombre_madre: '',
      grado: '',
      seccion: '',
      fecha_ingreso: ''
    };
  }
}
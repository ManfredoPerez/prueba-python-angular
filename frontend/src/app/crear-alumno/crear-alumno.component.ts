import { Component } from '@angular/core';
import { AlumnoService } from '../servicios/alumno.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent {
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
        icon: "success",
        title: "¡Éxito!",
        text: "Alumno creado exitosamente",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        this.limpiarFormulario()
      })
    }, error => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al crear el alumno",
        confirmButtonColor: "#d33",
      })
    });
  }

  limpiarFormulario() {
    this.alumno = {
      nombre: "",
      fecha_nacimiento: "",
      nombre_padre: "",
      nombre_madre: "",
      grado: "",
      seccion: "",
      fecha_ingreso: "",
    }
  }
}

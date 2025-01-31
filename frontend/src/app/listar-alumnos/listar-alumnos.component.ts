import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../servicios/alumno.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  alumnos: any[] = []; 
  alumnosFiltrados: any[] = []; 
  terminoBusqueda: string = '';  

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.alumnoService.listarAlumnos().subscribe(response => {
      this.alumnos = response;
      this.alumnosFiltrados = response;  
    });
  }

  buscarAlumnos() {
    if (this.terminoBusqueda) {
      this.alumnosFiltrados = this.alumnos.filter(alumno =>
        alumno.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
      );
    } else {
      this.alumnosFiltrados = this.alumnos;  // Si no hay término de búsqueda, muestra todos los alumnos
    }
  }
}
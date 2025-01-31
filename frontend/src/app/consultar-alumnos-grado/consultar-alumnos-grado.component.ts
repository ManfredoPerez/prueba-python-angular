import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../servicios/alumno.service';

@Component({
  selector: 'app-consultar-alumnos-grado',
  templateUrl: './consultar-alumnos-grado.component.html',
  styleUrls: ['./consultar-alumnos-grado.component.css']
})
export class ConsultarAlumnosGradoComponent implements OnInit {
  alumnos: any[] = [];
  grados: any[] = [];
  idGrado: number | null = null;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarGrados();
  }

  cargarGrados() {
    this.alumnoService.listarGrados().subscribe(response => {
      this.grados = response;
    });
  }

  consultarAlumnos() {
    if (this.idGrado) {
      this.alumnoService.consultarAlumnosPorGrado(this.idGrado).subscribe(response => {
        this.alumnos = response;
      });
    }
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Método para listar todos los alumnos
  listarAlumnos(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': environment.authHeader
    });
    return this.http.get(`${this.apiUrl}/listar-alumnos/`, { headers });
  }

  //Metodo para crear un alumno
  crearAlumno(alumno: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': environment.authHeader
    });
    return this.http.post(`${this.apiUrl}/crear-alumno/`, alumno, { headers });
  }

  // Método para consultar alumnos por grado
  consultarAlumnosPorGrado(idGrado: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': environment.authHeader
    });
    return this.http.get(`${this.apiUrl}/consultar-alumnos-grado/${idGrado}/`, { headers });
  }

  // Método para listar grados
  listarGrados(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': environment.authHeader
    });
    return this.http.get(`${this.apiUrl}/listar-grados/`, { headers });
  }

  // Método para listar secciones
  listarSecciones(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': environment.authHeader
    });
    return this.http.get(`${this.apiUrl}/listar-secciones/`, { headers });
  }

  // Método para crear un grado
  crearGrado(grado: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': environment.authHeader
    });
    return this.http.post(`${this.apiUrl}/crear-grado/`, grado, { headers });
  }

  // Método para crear una sección
  crearSeccion(seccion: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': environment.authHeader
    });
    return this.http.post(`${this.apiUrl}/crear-seccion/`, seccion, { headers });
  }
}
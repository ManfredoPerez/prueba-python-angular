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

}
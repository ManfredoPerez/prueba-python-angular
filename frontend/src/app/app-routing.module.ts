import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ConsultarAlumnosGradoComponent } from './consultar-alumnos-grado/consultar-alumnos-grado.component';

const routes: Routes = [
  { path: 'listar-alumnos', component: ListarAlumnosComponent },
  { path: 'crear-alumno', component: CrearAlumnoComponent },
  { path: 'consultar-alumnos-grado', component: ConsultarAlumnosGradoComponent },
  { path: '', redirectTo: '/listar-alumnos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

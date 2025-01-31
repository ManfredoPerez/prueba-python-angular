import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ConsultarAlumnosGradoComponent } from './consultar-alumnos-grado/consultar-alumnos-grado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnosComponent,
    CrearAlumnoComponent,
    ConsultarAlumnosGradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

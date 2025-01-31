import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAlumnosGradoComponent } from './consultar-alumnos-grado.component';

describe('ConsultarAlumnosGradoComponent', () => {
  let component: ConsultarAlumnosGradoComponent;
  let fixture: ComponentFixture<ConsultarAlumnosGradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarAlumnosGradoComponent]
    });
    fixture = TestBed.createComponent(ConsultarAlumnosGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

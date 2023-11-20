import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoSolicitudComponent } from './empleado-solicitud.component';

describe('EmpleadoSolicitudComponent', () => {
  let component: EmpleadoSolicitudComponent;
  let fixture: ComponentFixture<EmpleadoSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoSolicitudComponent]
    });
    fixture = TestBed.createComponent(EmpleadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

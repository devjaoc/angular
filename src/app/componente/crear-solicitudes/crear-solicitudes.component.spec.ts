import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudesComponent } from './crear-solicitudes.component';

describe('CrearSolicitudesComponent', () => {
  let component: CrearSolicitudesComponent;
  let fixture: ComponentFixture<CrearSolicitudesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearSolicitudesComponent]
    });
    fixture = TestBed.createComponent(CrearSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaSolicitudComponent } from './venta-solicitud.component';

describe('VentaSolicitudComponent', () => {
  let component: VentaSolicitudComponent;
  let fixture: ComponentFixture<VentaSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaSolicitudComponent]
    });
    fixture = TestBed.createComponent(VentaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

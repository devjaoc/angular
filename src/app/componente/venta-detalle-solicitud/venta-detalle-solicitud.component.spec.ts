import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaDetalleSolicitudComponent } from './venta-detalle-solicitud.component';

describe('VentaDetalleSolicitudComponent', () => {
  let component: VentaDetalleSolicitudComponent;
  let fixture: ComponentFixture<VentaDetalleSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaDetalleSolicitudComponent]
    });
    fixture = TestBed.createComponent(VentaDetalleSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

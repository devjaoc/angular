import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaDetalleCrearComponent } from './venta-detalle-crear.component';

describe('VentaDetalleCrearComponent', () => {
  let component: VentaDetalleCrearComponent;
  let fixture: ComponentFixture<VentaDetalleCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaDetalleCrearComponent]
    });
    fixture = TestBed.createComponent(VentaDetalleCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

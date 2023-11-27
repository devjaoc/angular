import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSolicitudComponent } from './producto-solicitud.component';

describe('ProductoSolicitudComponent', () => {
  let component: ProductoSolicitudComponent;
  let fixture: ComponentFixture<ProductoSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoSolicitudComponent]
    });
    fixture = TestBed.createComponent(ProductoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

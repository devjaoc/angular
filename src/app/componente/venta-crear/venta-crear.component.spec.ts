import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCrearComponent } from './venta-crear.component';

describe('VentaCrearComponent', () => {
  let component: VentaCrearComponent;
  let fixture: ComponentFixture<VentaCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaCrearComponent]
    });
    fixture = TestBed.createComponent(VentaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentaDetalle } from 'src/model/VentaDetalle';
import { VentadetalleService } from 'src/app/servieces/ventadetalle.service';

@Component({
  selector: 'app-venta-detalle',
  templateUrl: './venta-detalle.component.html',
  styleUrls: ['./venta-detalle.component.css']
})
export class VentaDetalleComponent {

  public listaventasdetalles: VentaDetalle[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() {}
  constructor(
    private ventadetalleServicio: VentadetalleService,
    private router: Router
  ) {
    ventadetalleServicio.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaventasdetalles = VentaDetalle.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-venta-detalle/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-venta-detalle/' + pID);
  }
  deleteSolicitud(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.ventadetalleServicio.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.hideMessageAfterDelay(3000);

          this.ventadetalleServicio.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaventasdetalles = VentaDetalle.mapParseListJson(resp.data);
            },
            error: (err) => {
              console.log(err.error.msg);
            },
          });
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }

  hideMessageAfterDelay(delay: number) {
    setTimeout(() => {
      this.mensaje = undefined;
    }, delay);
  }
}

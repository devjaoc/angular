import { Component } from '@angular/core';
import { VentaDetalle } from 'src/model/VentaDetalle';
import { ActivatedRoute, Router } from '@angular/router';
import { VentadetalleService } from 'src/app/servieces/ventadetalle.service';


@Component({
  selector: 'app-venta-detalle-solicitud',
  templateUrl: './venta-detalle-solicitud.component.html',
  styleUrls: ['./venta-detalle-solicitud.component.css']
})
export class VentaDetalleSolicitudComponent {
  public cargando: boolean = true;
  public ventadetalle?: VentaDetalle;

  constructor(
    private solicitudService:VentadetalleService,
    private activaRouter: ActivatedRoute,
    private router: Router
  ) {
    solicitudService
      .get(Number(activaRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.ventadetalle = resp.data as VentaDetalle;
          console.log(resp);
          this.cargando = false;
        },
        error: (err) => {
          console.log(err.error.msg);
          this.cargando = false;
        },
      });
  }
  eliminarSolicitud(pID: number) {
    this.solicitudService.delete(pID).subscribe({
      next: (resp) => {
        this.router.navigate(['venta_detalle']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}

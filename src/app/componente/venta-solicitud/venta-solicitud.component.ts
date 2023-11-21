import { Component } from '@angular/core';
import { Venta } from 'src/model/Venta';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VentaService } from 'src/app/servieces/venta.service';


@Component({
  selector: 'app-venta-solicitud',
  templateUrl: './venta-solicitud.component.html',
  styleUrls: ['./venta-solicitud.component.css']
})
export class VentaSolicitudComponent {
  private cargando: boolean = true;
  public venta?: Venta;

  constructor(
    private solicitudService:VentaService,
    private activaRouter: ActivatedRoute,
    private router: Router
  ) {
    solicitudService
      .get(Number(activaRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.venta = resp.data as Venta;
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
        this.router.navigate(['venta']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}

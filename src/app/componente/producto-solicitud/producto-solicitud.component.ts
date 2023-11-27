import { Component } from '@angular/core';
import { Producto } from 'src/model/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servieces/producto.service';


@Component({
  selector: 'app-producto-solicitud',
  templateUrl: './producto-solicitud.component.html',
  styleUrls: ['./producto-solicitud.component.css']
})
export class ProductoSolicitudComponent {
  public cargando: boolean = true;
  public producto?: Producto;

  constructor(
    private solicitudService:ProductoService,
    private activaRouter: ActivatedRoute,
    private router: Router
  ) {
    solicitudService
      .get(Number(activaRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.producto = resp.data as Producto;
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
        this.router.navigate(['producto']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}

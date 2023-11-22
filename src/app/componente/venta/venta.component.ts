import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Venta } from 'src/model/Venta';
import { VentaService } from 'src/app/servieces/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  public listaventas: Venta[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() {}
  constructor(
    private ventaServicio: VentaService,
    private router: Router
  ) {
    ventaServicio.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaventas = Venta.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-venta/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-venta/' + pID);
  }
  deleteSolicitud(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.ventaServicio.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.ventaServicio.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaventas = Venta.mapParseListJson(resp.data);
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
}

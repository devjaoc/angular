import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentaService } from 'src/app/servieces/venta.service';
import { Venta } from 'src/model/Venta';

@Component({
  selector: 'app-venta-crear',
  templateUrl: './venta-crear.component.html',
  styleUrls: ['./venta-crear.component.css']
})
export class VentaCrearComponent {
  venta!: Venta;
  mensaje!: string;
  cargando: boolean = false;
  constructor(
    private solicitudService: VentaService,
    private activaRouter: ActivatedRoute
  ) {
    //tener el id parametro
    //en caso que sea null
  
    if (activaRouter.snapshot.paramMap.get('id') != null) {
      this.cargando = true;
      solicitudService
        .get(Number(activaRouter.snapshot.paramMap.get('id')))
        .subscribe({
          next: (resp) => {
            this.venta = resp.data as Venta;
            this.cargando = false;
            //this.solicitud = new Solicitud(resp.data.id, resp.data.titulo_corto, resp.data.descripcion, 0);
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.venta = new Venta(-1, new Date, 0);
    }
  }
  submit() {
    //servidor.crearSolicitud(this.solicitud);
    //this.venta.VentaID = 1;
    if (this.venta.VentaID < 0) {
      this.solicitudService.create(this.venta).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'Solicitud Creada';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = 'Error al crear la Solicitud';
          this.mensaje = err.error.msg;
        },
      });
    } else {
      this.solicitudService
        .update(this.venta.VentaID, this.venta)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.mensaje = 'Solicitud Actualizada';
          },
          error: (err) => {
            console.log(err.error.msg);
            this.mensaje = err.error.msg;
          },
        });
    }
    //modificar para que si tiene definido id elemento solicitud se actualice si no
    //se crea nuevo
  }
}
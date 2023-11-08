import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from 'src/app/servieces/solicitud.service';
import { Solicitud } from 'src/model/Solicitud';

@Component({
  selector: 'app-crear-solicitudes',
  templateUrl: './crear-solicitudes.component.html',
  styleUrls: ['./crear-solicitudes.component.css'],
})
export class CrearSolicitudesComponent {
  solicitud!: Solicitud;
  mensaje!: string;
  cargando: boolean = false;
  constructor(
    private solicitudService: SolicitudService,
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
            this.solicitud = resp.data as Solicitud;
            this.cargando = false;
            //this.solicitud = new Solicitud(resp.data.id, resp.data.titulo_corto, resp.data.descripcion, 0);
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.solicitud = new Solicitud(-1, '', '', 0);
    }
  }
  submit() {
    //servidor.crearSolicitud(this.solicitud);
    this.solicitud.estado_solicitud_id = 1;
    if (this.solicitud.id < 0) {
      this.solicitudService.create(this.solicitud).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'Solicitud Creada';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = err.error.msg;
        },
      });
    } else {
      this.solicitudService
        .update(this.solicitud.id, this.solicitud)
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

import { Component } from '@angular/core';
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
  constructor(private solicitudService: SolicitudService) {
    //tener el id parametro
    //en caso que sea null
    this.solicitud = new Solicitud(-1, '', '', 0);
    //no sea null 
    //realizar solicitude de servidor 
    /* 
    solicitudService.get(id).
    .subscribe({
      next: (resp) => {
        console.log(resp);
        this.solicitud =resp.data---> Solicitud
         this.solicitud = new Solicitud(resp.data.id, resp.data.titulo_corto, resp.data.descripcion, 0);
      },  
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    */

  }
  submit() {
    //servidor.crearSolicitud(this.solicitud);
    this.solicitud.estado_solicitud_id = 1;
    //modificar para que si tiene definido id elemento solicitud se actualice si no 
    //se crea nuevo 
    this.solicitudService.create(this.solicitud).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    this.mensaje = 'Solicitud Creada';
  }
}

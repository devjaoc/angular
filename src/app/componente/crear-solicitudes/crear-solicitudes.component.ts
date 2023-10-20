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
    this.solicitud = new Solicitud(-1, '', '', 0);
  }
  submit() {
    //servidor.crearSolicitud(this.solicitud);
    this.solicitud.estado_solicitud_id = 1;
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

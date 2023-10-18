import { Component } from '@angular/core';
import { Solicitud } from 'src/model/Solicitud';

@Component({
  selector: 'app-crear-solicitudes',
  templateUrl: './crear-solicitudes.component.html',
  styleUrls: ['./crear-solicitudes.component.css']
})
export class CrearSolicitudesComponent {
  solicitud!: Solicitud;
  mensaje!: string;
  constructor() {
    this.solicitud = new Solicitud(-1, '', '', 0);
  }
  submit() {
    //servidor.crearSolicitud(this.solicitud);
    this.mensaje = "Solicitud Creada";
  }
}

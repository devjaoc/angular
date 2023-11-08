import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from 'src/app/servieces/solicitud.service';
import { Solicitud } from 'src/model/Solicitud';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css'],
})
export class ListaSolicitudesComponent {
  public listaSolicitudes: Solicitud[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() {}
  constructor(
    private solicitudServicio: SolicitudService,
    private router: Router
  ) {
    solicitudServicio.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaSolicitudes = Solicitud.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-solicitud/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-solicitudes/' + pID);
  }
  deleteSolicitud(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.solicitudServicio.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.solicitudServicio.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaSolicitudes = Solicitud.mapParseListJson(resp.data);
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

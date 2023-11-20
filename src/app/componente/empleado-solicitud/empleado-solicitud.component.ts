import { Component } from '@angular/core';
import { Empleado } from 'src/model/Empleado';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/servieces/empleado.service';


@Component({
  selector: 'app-empleado-solicitud',
  templateUrl: './empleado-solicitud.component.html',
  styleUrls: ['./empleado-solicitud.component.css']
})
export class EmpleadoSolicitudComponent {
  private cargando: boolean = true;
  public empleado?: Empleado;

  constructor(
    private solicitudService: EmpleadoService,
    private activaRouter: ActivatedRoute,
    private router: Router
  ) {
    solicitudService
      .get(Number(activaRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.empleado = resp.data as Empleado;
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
        this.router.navigate(['lista-solicitudes']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}

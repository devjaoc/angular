import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/model/Empleado';
import { EmpleadoService } from 'src/app/servieces/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  public listaEmpleados: Empleado[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() {}
  constructor(
    private empleadoServicio: EmpleadoService,
    private router: Router
  ) {
    empleadoServicio.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaEmpleados = Empleado.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-empleado/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-empleado/' + pID);
  }
  deleteSolicitud(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.empleadoServicio.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.empleadoServicio.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaEmpleados = Empleado.mapParseListJson(resp.data);
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

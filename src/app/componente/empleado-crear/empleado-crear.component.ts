import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/servieces/empleado.service';
import { Empleado } from 'src/model/Empleado';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styleUrls: ['./empleado-crear.component.css']
})
export class EmpleadoCrearComponent {
  empleado!: Empleado;
  mensaje!: string;
  cargando: boolean = false;
  constructor(
    private solicitudService: EmpleadoService,
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
            this.empleado = resp.data as Empleado;
            this.cargando = false;
            //this.solicitud = new Solicitud(resp.data.id, resp.data.titulo_corto, resp.data.descripcion, 0);
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.empleado = new Empleado(-1, '', '', '', new Date);
    }
  }
  submit() {
    //servidor.crearSolicitud(this.solicitud);
    //this.empleado.EmpleadoID = 1;
    if (this.empleado.EmpleadoID < 0) {
      this.solicitudService.create(this.empleado).subscribe({
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
        .update(this.empleado.EmpleadoID, this.empleado)
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
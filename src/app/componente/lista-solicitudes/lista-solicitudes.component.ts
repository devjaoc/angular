import { Component } from '@angular/core';
import { Solicitud } from 'src/model/Solicitud';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent {
  public listaSolicitudes: Solicitud[] = [];
  constructor() {
    this.listaSolicitudes.push(new Solicitud(1, 'Solicitud 1 ', 'Descripcion 1', 1));
    this.listaSolicitudes.push(new Solicitud(2, 'Solicitud 2 ', 'Descripcion 2', 1));
    this.listaSolicitudes.push(new Solicitud(3, 'Solicitud 3 ', 'Descripcion 3', 1));
    this.listaSolicitudes.push(new Solicitud(4, 'Solicitud 4 ', 'Descripcion 4', 1));
    this.listaSolicitudes.push(new Solicitud(5, 'Solicitud 5 ', 'Descripcion 5', 1));
    this.listaSolicitudes.push(new Solicitud(6, 'Solicitud 6 ', 'Descripcion 6', 1));
    this.listaSolicitudes.push(new Solicitud(7, 'Solicitud 7 ', 'Descripcion 7', 1));
    this.listaSolicitudes.push(new Solicitud(8, 'Solicitud 8 ', 'Descripcion 8', 1));
    this.listaSolicitudes.push(new Solicitud(9, 'Solicitud 9 ', 'Descripcion 9', 1));
  }
  deleteSolicitud(pID: number) {
    this.listaSolicitudes.splice(pID, 1);
    /*var listaid = this.listaSolicitudes.map((element, index, arr) => {
      console.log(arr[index]);
      if (element.id == 2) {
        return element.id;
      } else {
        return null;
      }
    });
    console.log(listaid);
    console.log("Foreach");
    this.listaSolicitudes.forEach(element => {
      console.log(element);
    });
    console.log("find");
    var solicitud = this.listaSolicitudes.find((element) =>
      element.id === pID
    );
    console.log(solicitud);
  */

  }

}

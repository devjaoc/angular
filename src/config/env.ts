import { Routes } from '@angular/router';
import { CrearSolicitudesComponent } from 'src/app/componente/crear-solicitudes/crear-solicitudes.component';
import { HomeComponent } from 'src/app/componente/home/home.component';
import { ListaSolicitudesComponent } from 'src/app/componente/lista-solicitudes/lista-solicitudes.component';
import { SolicitudesComponent } from 'src/app/componente/solicitudes/solicitudes.component';

export class ItemMenu {
  public id!: number;
  public name!: string;
  public href!: string;
  constructor(id: number, name: string, href: string) {
    this.id = id;
    this.name = name;
    this.href = href;
  }
}
export namespace env {
  export const menu: Array<ItemMenu> = [
    new ItemMenu(1, 'Inicio', '/'),
    new ItemMenu(2, 'Lista Solicitudes', 'lista-solicitudes'),
    new ItemMenu(3, 'Crear Solicitudes', 'crear-solicitudes'),
  ];
  export const routers: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-solicitudes', component: ListaSolicitudesComponent },
    { path: 'crear-solicitudes', component: CrearSolicitudesComponent },
    { path: 'editar-solicitud/:id', component: CrearSolicitudesComponent },
    { path: 'ver-solicitudes', component: SolicitudesComponent },
  ];
}

import { Routes } from '@angular/router';
import { CrearSolicitudesComponent } from 'src/app/componente/crear-solicitudes/crear-solicitudes.component';
import { HomeComponent } from 'src/app/componente/home/home.component';
import { ListaSolicitudesComponent } from 'src/app/componente/lista-solicitudes/lista-solicitudes.component';
import { SolicitudesComponent } from 'src/app/componente/solicitudes/solicitudes.component';
import { authGuardGuard } from 'src/app/guards/auth-guard.guard';
import { LoginComponent } from 'src/app/login/login.component';
import { CerrarSesionComponent } from 'src/app/componente/cerrar-sesion/cerrar-sesion.component';

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
    new ItemMenu(4, 'Cerrar sesion', 'cerrar-sesion')
  ];
  export const routers: Routes = [
    { path: '', component: HomeComponent ,canActivate:[authGuardGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'lista-solicitudes', component: ListaSolicitudesComponent ,canActivate:[authGuardGuard]},
    { path: 'crear-solicitudes', component: CrearSolicitudesComponent ,canActivate:[authGuardGuard]},
    { path: 'editar-solicitud/:id', component: CrearSolicitudesComponent ,canActivate:[authGuardGuard]},
    { path: 'ver-solicitudes/:id', component: SolicitudesComponent ,canActivate:[authGuardGuard]},
    { path: 'cerrar-sesion', component: CerrarSesionComponent }
  ];
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { ListaSolicitudesComponent } from './componente/lista-solicitudes/lista-solicitudes.component';
import { CrearSolicitudesComponent } from './componente/crear-solicitudes/crear-solicitudes.component';
import { SolicitudesComponent } from './componente/solicitudes/solicitudes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-solicitudes', component: ListaSolicitudesComponent },
  { path: 'crear-solicitudes', component: CrearSolicitudesComponent },
  { path: 'ver-solicitudes', component: SolicitudesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

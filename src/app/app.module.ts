import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componente/home/home.component';
import { SolicitudesComponent } from './componente/solicitudes/solicitudes.component';
import { CrearSolicitudesComponent } from './componente/crear-solicitudes/crear-solicitudes.component';
import { ListaSolicitudesComponent } from './componente/lista-solicitudes/lista-solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolicitudesComponent,
    CrearSolicitudesComponent,
    ListaSolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

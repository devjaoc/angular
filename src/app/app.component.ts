import { Component } from '@angular/core';
import { ItemMenu, env } from 'src/config/env';
import { Estudiante } from 'src/model/Estudiante';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaMenu: Array<ItemMenu>;

  title: string = 'Valor 1';
  textoPlaceholder: string = "Escribe algo aqui";
  imgSrc: string = "";
  texto: string = "";
  estudianteObj!: Estudiante;
  listaEstudiantes: Estudiante[] = [];
  isUserLoggedIn: boolean = false;


  constructor(private authService: AuthService) {
    this.listaMenu = env.menu.filter(item => {
      // Mostrar todos los elementos si el usuario está logueado, 
      // o solo el elemento con id 1 si no está logueado
      return this.authService.isUserLogin() || item.id === 1;
    });
    
    this.isUserLoggedIn = this.authService.isUserLogin();
  }

  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
  cambiarTitulo() {
    this.title = this.texto;
  }

  cerrarsesion(){
    return this.authService.logout();
  }
}

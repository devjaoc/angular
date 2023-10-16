import { Component } from '@angular/core';
import { ItemMenu, env } from 'src/config/env';
import { Estudiante } from 'src/model/Estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaMenu: Array<ItemMenu> = env.menu;

  title: string = 'Valor 1';
  textoPlaceholder: string = "Escribe algo aqui";
  imgSrc: string = "";
  texto: string = "";
  estudianteObj!: Estudiante;
  listaEstudiantes: Estudiante[] = [];

  constructor() {

    //setInterval(() => this.title = "Nuevo valor", 3000);
    /*this.estudianteObj = new Estudiante('PEPE', 35);
    this.listaEstudiantes.push(new Estudiante('PEPE', 35));
    this.listaEstudiantes.push(new Estudiante('PEPE 1', 35));
    this.listaEstudiantes.push(new Estudiante('PEPE 2', 35));
    this.listaEstudiantes.push(new Estudiante('PEPE 3', 35));
    this.listaEstudiantes.push(new Estudiante('PEPE 4', 35));
    this.listaEstudiantes.push(new Estudiante('PEPE 5', 35));
  */
  }
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
  cambiarTitulo() {
    this.title = this.texto;
  }
}

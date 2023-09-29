import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Valor 1';
  textoPlaceholder = "Escribe algo aqui";
  imgSrc = "";
  texto="";
  constructor() {
    setInterval(() => this.title = "Nuevo valor", 3000);
  }
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
  cambiarTitulo() {
    this.title = this.texto;
  }
}

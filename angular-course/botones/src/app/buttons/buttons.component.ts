import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `   <button (click)="aumentar()">Aumentar</button>
  <button (click)="disminuir()">Disminuir</button>
  {{clickMensaje}}
  `,
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent{
contador = 0;
  clickMensaje: any = 'Pulsa  botón para Aumentar o Disminuir';

  aumentar() {
  this.clickMensaje = ++this.contador;
  }
  disminuir() {
    this.clickMensaje = --this.contador;
  }
}

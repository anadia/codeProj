import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.scss']
})
export class JugadoresListComponent implements OnInit {
jugadores = [];
  constructor() {
    this.jugadores = [
      {
        nombre: 'Michael Jordan',
        equipo: 'Chicago Bulls'
      },
      {
        nombre: 'Larry Bird',
        equipo: 'Boston Celtics'
      },
      {
        nombre: 'Pau Gasol',
        equipo: 'Grisslys'
      }
    ];

  }

  ngOnInit(): void {
  }
  jugadorClicked(nombre: string){
    alert(nombre);
  }
}

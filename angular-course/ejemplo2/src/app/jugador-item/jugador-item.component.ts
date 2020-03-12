import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jugador-item',
  templateUrl: './jugador-item.component.html',
  styleUrls: ['./jugador-item.component.scss']
})
export class JugadorItemComponent implements OnInit {
// Propiedades
  @Input() nombre: string;
  @Input() equipo: string;
  constructor() { }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {
// Propiedades
  firstName: string;
  lastName: string;
  team: string;

  constructor() {
    // se inicializan las propiedades en el constructor
    this.firstName = 'Michael';
    this.lastName = 'Jordan';
    this.team = 'Chicago Bulls';
  }

  ngOnInit(): void {
  }

}

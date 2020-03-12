import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  @Input() nombreComunidad: string;
  @Input() contadorEnfermos: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {
  @Input() comunidad: string; // canal de entrada
  @Output() comunidadEnferma = new EventEmitter(false); // canal de salida
  constructor() {
  }

  ngOnInit(): void {
  }

  infectarClick() {
    console.log(this.comunidad);
    // emitimos sobre el canal de salida
    this.comunidadEnferma.emit();
  }


}

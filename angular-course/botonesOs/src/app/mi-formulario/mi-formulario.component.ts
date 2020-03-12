import {Component} from '@angular/core';
import {PuebloComponent} from '../pueblo/pueblo.component';


@Component({
  selector: 'mi-formulario',
  templateUrl: 'app/views/mi-formulario.component.html',
  styleUrls: ['./app.component.css']
})

export class MiFormularioComponent {
  public ciudad: string = 'Milano';
  public pais: string = 'Italia';

  showPueblo(event): void {
    alert(event.nombre);
  }
}

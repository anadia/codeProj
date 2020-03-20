import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coronavirus';
  enfermosMadrid: number = 0;
  enfermosAndalucia: number = 0;
  enfermosCataluna: number = 0;

  enfermar(comunidad: string) {
    if (comunidad === 'Madrid') {
      this.enfermosMadrid++;
    } else if (comunidad === 'Andalucia') {
      this.enfermosAndalucia++;
    } else if (comunidad === 'Cataluña') {
      this.enfermosCataluna++;
    }
  }
}

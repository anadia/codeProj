import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add',
  template: `
    <p>ANDALUCIA
      <button (click)="onClickButton1">+</button>
    </p>

    <p>MADRID
      <button (click)="onClickButton2">+</button>
    </p>

    <div ng-click="onClickButton"></div>`,
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() onClickButton1 = new EventEmitter();
  contador1: any = 0;
  @Output() onClickButton2 = new EventEmitter();
  contador2: any = 0;
};

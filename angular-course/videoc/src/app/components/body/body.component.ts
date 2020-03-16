import { Component } from '@angular/core';

@Component({

    selector: 'app-body',
    templateUrl: './body.component.html'
})


export class BodyComponent{

    mostrar = true;

    mensaje: any ={

        titulo: 'Un gran poder requiere una gran resposabilidad',
        autor: 'Ben Parker'
    }

    personajes: string [] = ['Fernando', 'Oscar', 'Carry'];
    
}

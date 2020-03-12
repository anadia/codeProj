import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HolaMundoComponent} from './hola-mundo/hola-mundo.component';
import {MiNombreComponent} from './mi-nombre/mi-nombre.component';
import { PlayerItemComponent } from './player-item/player-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    MiNombreComponent,
    PlayerItemComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

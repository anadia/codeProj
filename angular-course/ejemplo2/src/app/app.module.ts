import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JugadoresListComponent } from './jugadores-list/jugadores-list.component';
import { JugadorItemComponent } from './jugador-item/jugador-item.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresListComponent,
    JugadorItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

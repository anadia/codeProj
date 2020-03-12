import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiFormularioComponent } from './mi-formulario/mi-formulario.component';
import { PuebloComponent } from './pueblo/pueblo.component';

@NgModule({
  declarations: [
    AppComponent,
    MiFormularioComponent,
    PuebloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

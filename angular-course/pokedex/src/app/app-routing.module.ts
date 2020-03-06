import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {GenerationsComponent} from './components/generations/generations.component';
import {PokemonDetailComponent} from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'pokemon-detail/:id', component: PokemonDetailComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

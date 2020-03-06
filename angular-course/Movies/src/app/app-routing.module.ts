import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import {CarteleraComponent} from './components/cartelera/cartelera.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'cartelera', component: CarteleraComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

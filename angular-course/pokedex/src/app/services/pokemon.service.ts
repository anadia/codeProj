import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
    console.log('Servicio creado');
  }

  getAllPokemons() {
  return this.http.get(`${this.apiUrl}pokemon`);
  }
}

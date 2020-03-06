import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'http://www.omdbapi.com/?apikey=';
  apikey = 'a53ef5c2';
  constructor(private http: HttpClient) {
    console.log('Servicio movie inicializado');
  }
  getAllPokemonMovies() {
    return this.http.get(`${this.apiUrl}${this.apikey}&s=Pokemon&page=1`);
  }
  getMovieDetail(imdbID: string) {
    return this.http.get(`${this.apiUrl}${this.apikey}&i=${imdbID}`);
  }
}

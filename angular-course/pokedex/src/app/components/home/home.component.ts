import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemonList: any;
constructor(private  pokemonService: PokemonService) {}


  ngOnInit(): void {
  this.pokemonService
    .getAllPokemons()
    .subscribe((pokemons: any) => (this.pokemonList = pokemons.results));
  }

}

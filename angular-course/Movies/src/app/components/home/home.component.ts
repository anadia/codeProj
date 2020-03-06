import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList: any = [];

  constructor(private  movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService
      .getAllPokemonMovies()
      .subscribe((movies: any) => {
        console.log(movies);
        this.movieList = movies.Search;
      });
  }
}

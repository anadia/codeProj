import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieService} from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: string;
  movie: any;
  genres = [];
  constructor(
    private activatedRouted: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      this.id = params.id;
    });
    this.movieService.getMovieDetail(this.id).subscribe((movie: any) => {
      console.log(movie);
      this.movie = movie;
      this.genres = movie.Genre.split(',');
      console.log(this.genres);
    });
  }
}

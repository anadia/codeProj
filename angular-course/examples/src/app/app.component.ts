import { Component } from "@angular/core";
import {Product} from "./models/product";
import {Movie} from "./models/movie";



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  vista: boolean = false;
  product: Product = {
    name: "Unikitty",
    img: "https://i.pinimg.com/originals/b1/91/3f/b1913f3e7a2036d82f0e134a02999ecc.png"

  };


  array: string[] = ["Oscar", "Claudia", "Fer", "Carry", "Laura"];

  movies: Movie[] = [
    {
      name: "Blade Runner",
      director: "Ridley Scott",
      img: "https://assets.cinepolisklic.com/cmsklicia/movieimages/blade-runner/poster_resize_192X288.jpg",
      seen: false
    },
    {
      name: "Batman",
      director: "Christopher Nolan",
      img: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_UX182_CR0,0,182,268_AL_.jpg",
      seen: true
      }
  ];


  changeView(): boolean {
    return (this.vista = !this.vista);
  }

  changeView2(): boolean {
    return (this.vista = !this.vista);
  }
}

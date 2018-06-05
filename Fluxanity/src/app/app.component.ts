import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies:any;
  dataSource:any;
  movieNames:string;

  title = 'app';
  displayedColumns = ['title', 'genre', 'rating', 'cost'];

  constructor(private httpClient:HttpClient){}

  getProfile(){
    this.httpClient.get('https://snickdx.me:3002/movies')
      .subscribe(
        (data:any[]) => {
          this.movies = data;
        }
      )
  }

  returnMovies(event:any){
    this.movieNames = event.target.value;
  }

  ngOnInit(){
    this.httpClient.get('https://snickdx.me:3002/movies')
      .subscribe(
        (data:any[]) => {
          this.movies = data;
          this.dataSource = data;
          console.log(data);
        }
      )
  }
}

export interface MovieElement {
  title : string;
  genre: string;
  rating: number;
  cost: string;
}

const MOVIE_DATA: MovieElement[] = [
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'},
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'},
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'},
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'},
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'},
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'},
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'},
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'},
  {title: 'Moonlit', genre: 'Drama', rating: 5, cost: '$10'}
];

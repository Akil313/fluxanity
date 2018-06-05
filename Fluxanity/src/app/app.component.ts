import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies:any[];
  dataSource:any;
  movieNames:any[];
  searchName:string;

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
    this.movieNames = [];
    this.searchName = event.target.value;

    if(this.searchName != ''){
      for (var x = 0; x < this.movies.length; x++) {
        if (this.movies[x].title.includes(this.searchName)) {
          this.movieNames.push(this.movies[x].title);
        }
      }
    }
  }

  recieveMovies($event){
    this.dataSource = $event;
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

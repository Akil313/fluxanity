import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import { HttpClient }from '@angular/common/http';
import {MyDialogComponent} from "./my-dialog/my-dialog.component";

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

  constructor(private httpClient:HttpClient, public dialog: MatDialog){}

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
        if (this.movies[x].title.trim().includes(this.searchName)) {
          this.movieNames.push(this.movies[x].title);
        }
      }
    }
  }

  recieveMovies($event){
    this.dataSource = $event;
  }

  getMovies(){
    this.httpClient.get('https://snickdx.me:3002/movies')
      .subscribe(
        (data:any[]) => {
          this.movies = data;
          this.dataSource = data;
          console.log(data);
        }
      )
  }

  openDialog(): void{
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '300px',
      data: { title: '', genre: '', rating: '', cost: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      console.log(result);
      this.movies = [];
      this.getMovies();
      dialogRef.close();
    });
  }

  ngOnInit(){
    this.getMovies();
  }
}

export interface MovieElement {
  title : string;
  genre: string;
  rating: number;
  cost: string;
}

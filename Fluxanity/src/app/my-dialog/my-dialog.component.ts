import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie'
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  model = new Movie('', '', 0, 0);
  movies:any[];
  @Output() moviesEvent = new EventEmitter<any>()

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.httpClient.post('https://snickdx.me:3002/movies/', this.model)
      .subscribe(
        (data:any) => {
          console.log(data)
        }
      )

    this.httpClient.get('https://snickdx.me:3002/movies')
      .subscribe(
        (data:any[]) => {
          this.movies = data;
          console.log(data);
        }
      )

    this.moviesEvent.emit(this.movies);
  }

  onCloseCancel() {

  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}

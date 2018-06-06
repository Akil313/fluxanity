import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie'
import {AppComponent} from "../app.component";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  movies:any[];
  @Output() moviesEvent = new EventEmitter<any>()

  constructor(private httpClient:HttpClient, public dialogRef: MatDialogRef<MyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  onSubmit() {
    this.httpClient.post('https://snickdx.me:3002/movies/', this.data)
      .subscribe(
        (data:any) => {
          console.log(data)
        }
      )

    this.moviesEvent.emit(this.movies);

    this.dialogRef.close();
  }

  onCloseCancel() {
    this.dialogRef.close();
  }

  get diagnostic() {
    return JSON.stringify(this.data);
  }
}

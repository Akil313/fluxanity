import { Component, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayedColumns = ['title', 'genre', 'rating', 'cost'];
  dataSource = new MatTableDataSource(MOVIE_DATA);
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


/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DialogOverviewExample {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

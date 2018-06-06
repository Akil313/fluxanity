import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MyDialogComponent} from "../my-dialog/my-dialog.component";
import { HttpClient }from '@angular/common/http';
import {Movie} from  '../movie'

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {
  private dialogResult: any;

  constructor(public dialog: MatDialog) { }

  openDialog(): void{
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '300px',
      data: { title: '', genre: '', rating: '', cost: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      console.log(result);
      dialogRef.close();
    });
  }

  ngOnInit() {
  }

}

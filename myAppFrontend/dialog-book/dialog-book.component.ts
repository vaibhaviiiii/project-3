import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-book',
  templateUrl: './dialog-book.component.html',
  styleUrls: ['./dialog-book.component.css']
})
export class DialogBookComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogBookComponent>,private router:Router) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
}  

}

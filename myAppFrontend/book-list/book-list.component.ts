import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Books } from '../books'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { DialogBookComponent } from '../dialog-book/dialog-book.component';
 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Books[]=[];
  deleted=false;
  constructor(private dialog:MatDialog, private service:BookServiceService, private book:Books, private router:Router) {

   }

   openDialog() {
 
     const dialogConfig = new MatDialogConfig();
 
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
 
     dialogConfig.data = {
       id: 1,
       title: 'Info'
   };
 
     this.dialog.open(DialogBookComponent, dialogConfig);
 }

  ngOnInit(){
    this.service.fetchBookList().subscribe(
      data=>{this.books=data},
      error=>console.log("error occurred")
    )
  
  }

  getBook(id: number){
    this.router.navigate(['fetch',id]);
  }

  addBook(){
    this.router.navigate(["add"]);
  }

  editBook(id:number){
    this.router.navigate(['edit',id]);
  }

  remove(id:number)
  {
    this.deleted=true;
    this.openDialog();
    this.service.remove(id).subscribe(data=>console.log("deleted"),error=>console.error());
  }

}

import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Books } from '../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book=new Books();
  allBooksList: Books[] = []; 
  submitted=false;
  exists= false;
  wrong=false;
  constructor(private router:Router, private service: BookServiceService) {

    this.service.fetchBookList().subscribe(data=>{this.allBooksList=data;console.log(this.allBooksList);},error=>console.error());
  }

  ngOnInit(): void {
  }

  allBooks()
  {
    this.router.navigate([""]);
  }

  onSubmit() {
    this.submitted = true;
    
    this.allBooksList.forEach((x)=>{if(this.book.id==x.id || this.book.name==x.name)this.exists=true;});
    if(this.exists==false && this.book!=null && this.book.id>0 && this.book.name !=null && this.book.author !=null && this.book.price >100)
    {
     
      this.add();
    }
    else{
      if(this.exists==true){ 
        console.log("Book ID or Book name already exists");
      }
      else  
      this.wrong=true;
    }
    
  }

  add()
  {
    this.service.addBook(this.book).subscribe(
      data=> console.log("added book"),
      error=>console.error()
    );
  }

}

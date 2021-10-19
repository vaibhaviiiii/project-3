import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Books } from '../books';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id: number=0;
  book = new Books();
  
  submitted=false;
  wrong=false;

  constructor(private route: ActivatedRoute , private router:Router, private service:BookServiceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.book.id=this.id;
  }

  onSubmit()
  {
    this.submitted=true;

    if(this.book!=null && this.book.name !=null && this.book.author !=null && this.book.price >100)
    {
      this.service.addBook(this.book).subscribe(
        data=>console.log("edited"),
        error=>console.error()
      );
    }
    else  
      this.wrong=true;
    
  }

  allBooks()
  {
    this.router.navigate([""]);
  }

}

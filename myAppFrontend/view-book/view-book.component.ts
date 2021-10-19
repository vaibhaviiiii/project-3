import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Books } from '../books'

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  id: number=0;
  Book: Books = new Books; 

  constructor(private route: ActivatedRoute , private router:Router, private service:BookServiceService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

    this.service.viewBook(this.id).subscribe(
      data=>this.Book=data,
      error=>console.error()
      
    );
  }

  allBooks(){
  
    this.router.navigate([''])
  
  }
  

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Books } from './books'
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) {}

  fetchBookList():Observable<any>{
    return this.http.get<any>(`http://localhost:4000/listBooks`)
  }

  viewBook(id:number):Observable<any>{
    return this.http.get<any>(`http://localhost:4000/fetch/${id}`)
  }

  addBook(book:Object):Observable<Object>{
    return this.http.post(`http://localhost:4000/addBook`,book);
  }

  remove(id:number):Observable<any>{
    return this.http.get(`http://localhost:4000/remove/${id}`);
  }

}

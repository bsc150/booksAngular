import {Injectable} from '@angular/core';
import {Book} from "../models/book.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddBookService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  addBook(id: string, title: string) :Observable<Book>{
    const book: Book = {
      id, title
    };
    console.log("calling post with book" + book.id +" " +  book.title);
    return this.http.post<Book>("http://localhost:3000/books", book, this.httpOptions)
  }
}

import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book.model";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(public service: BookService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.service.getBooks()
      .subscribe(books => this.books = books);
  }
}

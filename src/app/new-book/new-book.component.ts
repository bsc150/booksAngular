import {Component, OnInit} from '@angular/core';
import {AddBookService} from "../services/add-book.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  id = "";
  title = "";

  constructor(public addService: AddBookService) {
  }

  ngOnInit(): void {
  }

  addBooks(id: string, title: string) {
    this.addService.addBook(id, title).subscribe();
  }
}

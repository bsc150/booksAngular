import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  id = "";
  title= "";

  constructor() {
  }

  ngOnInit(): void {
  }

}

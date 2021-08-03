import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/book.model";

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<Book[]>("https://my-json-server.typicode.com/typicode/demo/posts")
  }
}

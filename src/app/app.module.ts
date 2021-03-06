import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AllBooksComponent} from './all-books/all-books.component';
import {NewBookComponent} from './new-book/new-book.component';
import {FormsModule} from "@angular/forms";
import {BookService} from "./services/book.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AddBookService} from "./services/add-book.service";

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BookService,
    AddBookService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

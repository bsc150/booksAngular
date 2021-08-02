import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  currentPage= "home";
  displayPages= ["home", "bookList", "newBook"];

  constructor() {
  }

  pickPage(page: string){
    this.currentPage = page;
  }
}

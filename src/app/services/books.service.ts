import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books;
  private book: Book[];
  private booksArr: [];

  constructor(private http: HttpClient) {
    this.books = this.http.get(
      'https://fakerestapi.azurewebsites.net/api/books'
    );
  }

  getBooks() {
    return this.books;
    // return this.http.get('https://fakerestapi.azurewebsites.net/api/books');
  }

  getBookImage(id: number) {
    return `http://picsum.photos/200/300/?image=${id}`;
  }

  setDefaultImg() {
    return './assets/images/noimage.png';
  }

  getBook(id: number, booksList: any) {
    console.log(id);
    console.log(booksList);
    return booksList[id];
  }
  getUserBooks() {
    //return JSON.parse(localStorage.getItem('userBooks'));
    return this.http.get('https://fakerestapi.azurewebsites.net/api/books');
  }
}

export interface Book {
  Description: string;
  Excerpt: string;
  ID: number;
  PageCount: number;
  PublishDate: Date;
  Title: string;
  Image?: string;
}

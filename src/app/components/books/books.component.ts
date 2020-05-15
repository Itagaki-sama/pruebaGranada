import { Component, OnInit, Output } from '@angular/core';
import { BooksService, Book } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private router: Router, private booksService: BooksService) {}

  seeBook(id: number) {
    this.router.navigate(['/book', id]);
  }

  getBookImage(id: number) {
    return this.booksService.getBookImage(id);
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((booksList: []) => {
      this.books = booksList;
    });
  }
}

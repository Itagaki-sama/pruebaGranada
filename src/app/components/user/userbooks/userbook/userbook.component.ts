import { Component, OnInit, Input } from '@angular/core';
import { Book, BooksService } from 'src/app/services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userbook',
  templateUrl: './userbook.component.html',
})
export class UserbookComponent implements OnInit {
  books: Book[];
  book: any = {};
  id: number;

  constructor(
    private activated: ActivatedRoute,
    private booksService: BooksService
  ) {
    this.activated.params.subscribe((params) => {
      this.id = parseInt(params.id, 10);
    });
  }

  getBook(books: Book[], id: number) {
    for (const book of books) {
      if (book.ID === id) {
        return book;
      }
    }
  }

  getBookImage(id: number) {
    return this.booksService.getBookImage(id);
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((booksList: []) => {
      this.books = booksList;
      this.book = this.getBook(this.books, this.id);
    });
  }
}

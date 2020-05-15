import { Component, OnInit, Input } from '@angular/core';
import { BooksService, Book } from '../../../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userbooks',
  templateUrl: './userbooks.component.html',
})
export class UserbooksComponent implements OnInit {
  books: Book[];
  idUser: any;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private booksService: BooksService
  ) {
    this.activated.params.subscribe((params) => {
      this.idUser = parseInt(params.id, 10);
    });
  }
  createBook() {
    this.router.navigate(['/create']);
  }

  seeBook(id: number) {
    console.log('/user/', this.idUser, '/book', id);
    this.router.navigate(['/user/', this.idUser, '/book', id]);
  }

  getBookImage(id: number) {
    return this.booksService.getBookImage(id);
  }

  ngOnInit(): void {
    this.booksService.getUserBooks().subscribe((booksList: []) => {
      this.books = booksList;
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService, Book } from '../../../services/books.service';

@Component({
  selector: 'app-bookcards',
  templateUrl: './bookcards.component.html',
})
export class BookcardsComponent implements OnInit {
  @Input() book: any = {};
  @Input() image: string;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private booksService: BooksService
  ) {}

  setDefaultImg() {
    this.image = this.booksService.setDefaultImg();
  }

  ngOnInit(): void {}
}

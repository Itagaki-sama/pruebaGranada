import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-bookdisplay',
  templateUrl: './bookdisplay.component.html',
  styleUrls: ['./bookdisplay.component.scss'],
})
export class BookdisplayComponent implements OnInit {
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

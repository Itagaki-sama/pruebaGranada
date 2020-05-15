import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  idUser: number;
  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private booksService: BooksService
  ) {
    this.activated.params.subscribe((params) => {
      this.idUser = parseInt(params.id, 10);
      console.log(this.idUser);
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import {
  FormGroup,
  FormBuilder,
  RequiredValidator,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
})
export class BookformComponent implements OnInit {
  @Input() book: any = {};
  @Input() index: number;
  @Input() image: string;

  bookInputs: FormGroup;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private booksService: BooksService,
    private fb: FormBuilder
  ) {}

  setDefaultImg() {
    this.image = this.booksService.setDefaultImg();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.bookInputs = this.fb.group({
      image: ['', ,],
      title: ['', Validators.required],
      publishDate: ['', Validators.required],
      pageCount: ['', ,],
      description: ['', Validators.required],
      excerpt: ['', ,],
    });
  }

  guardar() {
    console.log(this.bookInputs);
    if (this.bookInputs.invalid) {
      return Object.values(this.bookInputs.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    } else {
      console.log(this.bookInputs.value);
      // localStorage.setItem('datos', JSON.stringify(res));
    }
    console.log(this.bookInputs.value);
    this.bookInputs.reset();
  }

  get tileInvalido() {
    return (
      this.bookInputs.get('title').invalid &&
      this.bookInputs.get('title').touched
    );
  }

  get publishDateInvalido() {
    return (
      this.bookInputs.get('publishDate').invalid &&
      this.bookInputs.get('publishDate').touched
    );
  }

  get descriptionInvalido() {
    return (
      this.bookInputs.get('description').invalid &&
      this.bookInputs.get('description').touched
    );
  }

  crearListeners() {
    this.bookInputs.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.bookInputs.statusChanges.subscribe((status) =>
      console.log({ status })
    );
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/books/book/book.component';
import { UserbooksComponent } from './components/user/userbooks/userbooks.component';
import { UserbookComponent } from './components/user/userbooks/userbook/userbook.component';
import { EdituserbookComponent } from './components/user/edituserbook/edituserbook.component';
import { CreateuserbookComponent } from './components/user/createuserbook/createuserbook.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UserinfoComponent } from './components/user/userinfo/userinfo.component';
import { BookcardsComponent } from './components/shared/bookcards/bookcards.component';
import { BookdisplayComponent } from './components/shared/bookdisplay/bookdisplay.component';
import { BookformComponent } from './components/shared/bookform/bookform.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    BooksComponent,
    BookComponent,
    UserbooksComponent,
    UserbookComponent,
    EdituserbookComponent,
    CreateuserbookComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    UserinfoComponent,
    BookcardsComponent,
    BookdisplayComponent,
    BookformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

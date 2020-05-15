import { Routes, RouterModule } from '@angular/router';

import { UserbooksComponent } from './userbooks/userbooks.component';
import { UserbookComponent } from './userbooks/userbook/userbook.component';
import { EdituserbookComponent } from './edituserbook/edituserbook.component';
import { CreateuserbookComponent } from './createuserbook/createuserbook.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

export const USER_ROUTES: Routes = [
  { path: 'info', component: UserinfoComponent },
  {
    path: 'books',
    component: UserbooksComponent,
  },
  { path: 'create', component: CreateuserbookComponent },
  {
    path: 'book/:id',
    component: UserbookComponent,
    children: [{ path: 'edit', component: EdituserbookComponent }],
  },

  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

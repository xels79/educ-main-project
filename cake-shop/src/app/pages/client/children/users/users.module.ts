import { NgModule } from '@angular/core';
import { CommonModule, I18nPluralPipe } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    UsersComponent,
       UserAddComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    I18nPluralPipe
  ]
})
export class UsersModule { }

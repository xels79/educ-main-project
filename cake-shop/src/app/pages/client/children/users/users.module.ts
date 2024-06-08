import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  
    UsersComponent,
       UserAddComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule
  ]
})
export class UsersModule { }

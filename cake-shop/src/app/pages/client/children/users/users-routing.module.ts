import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'register',
    component:UserAddComponent
  },
  {
    path:'update/:id',
    component:UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

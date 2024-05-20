import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path:'',
    component: ClientComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./children/main-page/main-page.module').then(m=>m.MainPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from './children/login/login.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ClientComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
  ],
  providers:[
    Title
  ]
})
export class ClientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MenubarModule
  ]
})
export class ClientModule { }

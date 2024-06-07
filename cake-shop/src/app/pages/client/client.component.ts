import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  showLogin:boolean = false;
  mainMenu: MenuItem[] = [{
    label:'Главная'
  },
  {
    label:'Галерея тортов'
  },
  {
    label:'Рецепты тортов'
  },
  {
    label:'Магазин'
  },
  {
    label:'О нас'
  },
];

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.push({
      label:"Войти",
      command:()=>{
        console.log("click");
        this.showLogin = true;
      }
    });
  }
  closeLoginDialog(): void {
    this.showLogin = false;
  }

}

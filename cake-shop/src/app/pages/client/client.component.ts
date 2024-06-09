import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { filter } from 'rxjs';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  showLogin:boolean = false;
  mainMenu: MenuItem[] = [{
    label:'Главная',
    routerLink:['/'],
    routerLinkActiveOptions: { exact: true } 
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
  //   this.router.events.pipe(
  //     filter(data=>data instanceof NavigationEnd)
  //   ).subscribe((routData)=>{
  //     this.setAciveMenu((routData as NavigationEnd).url);
  //   });
  }

  // ngAfterViewInit(): void {
  //   this.setAciveMenu(this.router.routerState.snapshot.url)
  // }

  // private setAciveMenu(url:string): void {
  //   switch(url){
  //     case '/':
  //       //this.mainMenu[0]
  //       break;
  //   }
  // }

  closeLoginDialog(): void {
    this.showLogin = false;
  }

}

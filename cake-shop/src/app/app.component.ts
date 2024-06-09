import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cake-shop';
  constructor(private roter:Router) {}
  ngOnInit(): void {
    this.roter.events.subscribe(data=>{
      // console.log('app', data);
    });
  }
}

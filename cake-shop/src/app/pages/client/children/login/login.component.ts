import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() visible:boolean = false;
  @Output() closeClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}

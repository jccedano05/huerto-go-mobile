import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-inside-toolbar',
  templateUrl: './login-inside-toolbar.component.html',
  styleUrls: ['./login-inside-toolbar.component.scss'],
})
export class LoginInsideToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onClickLogo(){
    console.log('Logo');
  }

  onClickSendTo(){
    console.log('SendTo');
  }

  onClickCart(){
    console.log('Cart');
  }

}

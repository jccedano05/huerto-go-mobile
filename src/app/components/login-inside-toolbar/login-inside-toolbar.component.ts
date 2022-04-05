import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-inside-toolbar',
  templateUrl: './login-inside-toolbar.component.html',
  styleUrls: ['./login-inside-toolbar.component.scss'],
})
export class LoginInsideToolbarComponent implements OnInit {

  @Input() disabledSendTo;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  onClickLogo(){
    this.navCtrl.navigateForward('/tabs/tab0');
  }

  onClickSendTo(){
    this.navCtrl.navigateBack('back');
  }

  onClickCart(){
    this.navCtrl.navigateForward('/products-cart-list');
  }

}

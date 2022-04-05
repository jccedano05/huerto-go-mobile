import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-head-bar-profile',
  templateUrl: './head-bar-profile.component.html',
  styleUrls: ['./head-bar-profile.component.scss'],
})
export class HeadBarProfileComponent implements OnInit {

  @Input() headName: string;
  @Input() urlImage: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}


  onClickBack(){
    this.navCtrl.navigateBack('/tabs/tab4');
  }

  onClickCart(){
    this.navCtrl.navigateForward('/products-cart-list');
  }
}

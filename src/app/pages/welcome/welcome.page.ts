import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public navCtrl: NavController) {  }

  ngOnInit() { }

  onClick() {
    this.navCtrl.navigateForward('/login');
    }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {


  constructor(public navCtrl: NavController) {}

  optionProfileRequest(direction: string){
    console.log(`redireccion /${direction}`);
    this.navCtrl.navigateForward(`/${direction}`);
  }

  closeSessionRequest(){
    console.log('Cerrar Sesion');
  }
  closeAllSessionRequest(){
    console.log('Cerrar Todas las Sesiones');
  }
}

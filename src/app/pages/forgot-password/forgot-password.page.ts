import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string;

  constructor(private navCtrl: NavController, private userService: UserService, private alertController: AlertController ) { }

  ngOnInit() {
  }

  emailEvent( email: string){
    this.email = email;
  }

  async onClickConfirm( email: string ){
    let isExistEmail = false;
    isExistEmail = await this.userService.findEmail( email );

    if (isExistEmail) {
      this.presentAlert('Envio de correo exitoso', 'Llegara un correo con los pasos a seguir para recuperar tu contraseña');
    }
    else{
      this.presentAlert('El correo no existe', 'No se encontró el correo en la base de datos');
    }
  }


  async presentAlert(title: string, mesaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: mesaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  onClickCancel(){
    
    this.navCtrl.navigateRoot('/login');
  }

}

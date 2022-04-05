import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userEmail: string;
  userPassword: string;

  constructor(public navCtrl: NavController, private userService: UserService, private alertController: AlertController,
    private firebaseService: FirebaseService) { }


  ngOnInit(){}


  emailEvent( email){
    this.userEmail = email;
  }

  passwordEvent( password){
    this.userPassword = password;
  }


  async onClickStartSession(email, password){

    try {
      const user = await this.firebaseService.login(email, password);
      await this.userService.setTokenLogin(user.user.uid);
      this.navCtrl.navigateRoot('/tabs/tab0');
    } catch (error) {
    this.presentAlert();
    }
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error al ingresar',
      message: 'Usuario y/o Contraseña no validos',
      buttons: ['OK']
    });

    await alert.present();
  }


   onClickGmail(){
     try {
     const user = this.firebaseService.loginWithGmail();
     console.log(user);
     } catch (error) {
      this.presentAlert();
     }
  }

  async onClickFacebook(){
    this.firebaseService.loginWithFacebook();
  }

}

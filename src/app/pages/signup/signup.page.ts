import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { FirestoreService } from '../../services/firestore.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;
  passwordConfirm: string;
  telephone: number;


  constructor(  private alertController: AlertController, private userService: UserService,
     private fireStore: FirestoreService, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  emailEvent( email){
    this.email = email;
  }

  passwordEvent( password){
    this.password = password;
  }

  passwordConfirmEvent( passwordConfirm){
    this.passwordConfirm = passwordConfirm;
  }

  telephoneEvent( telephone){
    this.telephone = telephone;
  }


  async presentAlert(title, subtitle) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: subtitle,
      buttons: ['OK']
    });

    await alert.present();
  }


  async onClickNext(email, password, passwordConfirm, telephone){

    /*----- Valiadtion of Email ----- */
    const emailValidation = new FormControl(email, [Validators.email, Validators.required] );
    if(emailValidation.errors){ // if exist the error
      await this.presentAlert('Correo electronico invalido.!', 'Verifica que el correo electronico sea escrito de manera valida');
      return;
    }

    /*----- Valiadtion of Password ----- */
    // eslint-disable-next-line max-len
    const passwordValidation = new FormControl(password, [Validators.minLength(8), Validators.maxLength(16),
      Validators.pattern('[a-zA-Z0-9 ]*') ,Validators.required] );
    if(passwordValidation.errors){
      await this.presentAlert('Contraseña invalida.!', 'La contraseña debe contener 8 caracteres como minimo, 16 maximo y alfanumericos');
      return;
    }

     /*----- Valiadtion of Equals Passwords ----- */
     const passwordConfirmValidation = new FormControl(password, Validators.required );
    if(password !== passwordConfirm || passwordConfirmValidation.errors) {
      await this.presentAlert('Contraseñas diferentes.!', 'La contraseña deben de ser iguales para confirmar');
      return;
    }

     /*----- Valiadtion Telephone Number ----- */
    const telephoneValidation = new FormControl(telephone, [Validators.minLength(10), Validators.maxLength(12),
      Validators.pattern('[0-9]*') ,Validators.required] );
    if(telephoneValidation.errors){
      await this.presentAlert('Telefono invalido.!', 'Deben de ser solo numeros (10) y si agregas lada de pais (12, omitir el +)');
      return;
    }

     /*----- Valiadtion if Email exist in Database ----- */
    if(!this.userService.findEmail(email)){
      await this.presentAlert('El correo electronico ya existe.!', 'Favor de proporcionar un nuevo correo');
      return;
    }

    //guardamos el email y el password en la BD
    this.fireStore.tempUserRegister(email, password, telephone);

    const navigationExtras: NavigationExtras = {
      queryParams: { email }
    };
    this.navCtrl.navigateForward('/signup-form', navigationExtras);
  }

}

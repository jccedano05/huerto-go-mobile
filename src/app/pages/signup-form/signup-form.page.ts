import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { UsersTemp } from '../../interfaces/UsersTemp';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/User';
import { AlertController, NavController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.page.html',
  styleUrls: ['./signup-form.page.scss'],
})
export class SignupFormPage implements OnInit {

  userTempId: string;
  userTemp: UsersTemp = null;
  user: UsersTemp = null;
  userToRegister: User = {
    uid: '',
    email: '',
    userInformation: {
        names: '',
        lastName: '',
        date: '',
        gender: '',
        telephone: 0,
        street: '',
        zipCode: 0,
        numberStreet: 0,
        city: '',
        state: '',
        intNumber: 0,
        crossStreet1: '',
        crossStreet2: ''
    }
  };
  emailParam: string;

  names: string;
  lastName: string;
  date: string;
  gender: string;
  street: string;
  zipCode: number;
  numberStreet: number;
  city: string;
  state: string;
  intNumber: number;
  crossStreet1: string;
  crossStreet2: string;

  constructor( private fireStoreService: FirestoreService, private route: ActivatedRoute,
    private alertController: AlertController, private firebaseService: FirebaseService, private navCtrl: NavController,
    private userService: UserService ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.emailParam = params.email;
    });
    // const data = await this.fireStoreService.tempUserSearch();
    const data = await this.fireStoreService.getTempUsers();

    data.forEach( (doc) => {
      this.userTemp = Object.create(doc.data());
       if(this.userTemp.email.toLocaleLowerCase() === this.emailParam.toLocaleLowerCase()){
          this.userTempId = doc.id;
          this.user = this.userTemp;
       }
    });

    this.userTemp = null;

    if( this.user === null){
      await this.presentAlert('Email invalido.!', 'Debe registrar el correo y demas datos de la seccion anterior');
    this.navCtrl.navigateBack('/signup');
    }

  }


  nameEvent( names ){
    this.names = names;
  }

  lastNameEvent( lastName ){
    this.lastName = lastName;
  }

  birthdayEvent( date ){
    this.date = date;
  }

  genderEvent( gender ){
    this.gender = gender;
  }

  streetEvent( street ){
    this.street = street;
  }

  zipCodeEvent( zipCode ){
    this.zipCode = zipCode;
  }

  numberStreetEvent( numberStreet){
    this.numberStreet = numberStreet;
  }

  cityEvent( city ){
    this.city = city;
  }

  stateEvent( state ){
    this.state = state;
  }

  intNumberEvent( intNumber ){
    this.intNumber = intNumber;
  }

  crossStreet1Event( crossStreet1) {
    this.crossStreet1 = crossStreet1;
  }

  crossStreet2Event( crossStreet2 ){
    this.crossStreet2 = crossStreet2;
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




  async onClickCreate(names, lastName, date, gender = '', street, zipCode, numberStreet, city,
                        state, intNumber = 0, crossStreet1 = '', crossStreet2 = '' ){

    /*----- Valiadtion of names ----- */
    const namesValidation = new FormControl(names, [Validators.minLength(2), Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]*'), Validators.required] );
    if(namesValidation.errors){ // if exist the error
      await this.presentAlert('Nombre(s) invalido.!', 'Solo se aceptan letras min: 2, max: 30');
      return;
    }

    /*----- Valiadtion of lastName ----- */
    // eslint-disable-next-line max-len
    const lastNameValidation = new FormControl(lastName, [Validators.minLength(1), Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]*') ,Validators.required] );
    if(lastNameValidation.errors){
      await this.presentAlert('Apellido(s) invalido.!', 'Solo se aceptan letras min: 2, max: 30');
      return;
    }

    /*----- Valiadtion date ----- */
    const dateValidation = new FormControl(date, Validators.required );
    if(dateValidation.errors) {
      await this.presentAlert('Fecha de nacimiento incorrecta.!','Es necesario colocar la fecha de nacimiento');
      return;
    }

     /*----- Valiadtion street ----- */
    const streetValidation = new FormControl(street, [Validators.minLength(1), Validators.maxLength(50),
      Validators.pattern('[a-zA-Z0-9 ]*') ,Validators.required] );
    if(streetValidation.errors){
      await this.presentAlert('Calle invalida.!', 'Deben de ser solo alfanumericos min:1, max: 50');
      return;
    }


    /*----- Valiadtion of zipCode ----- */
    const zipCodeValidation = new FormControl(zipCode, [Validators.minLength(5), Validators.maxLength(5),
      Validators.pattern('[0-9]*'), Validators.required] );
    if(zipCodeValidation.errors){
      await this.presentAlert('Codigo Postal invalido.!', 'Solo se aceptan numeros y deben ser 5');
      return;
    }

    /*----- Valiadtion of numberStreet ----- */
    const numberStreetValidation = new FormControl(numberStreet, [Validators.minLength(1), Validators.maxLength(8),
      Validators.pattern('[0-9]*') ,Validators.required] );
    if(numberStreetValidation.errors){
      await this.presentAlert('Numero exterior invalido.!', 'solo numeros min: 1, max: 8');
      return;
    }

    /*----- Valiadtion of city ----- */
    const cityValidation = new FormControl(city, [Validators.minLength(2), Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]*'), Validators.required] );
    if(cityValidation.errors){
      await this.presentAlert('Ciudad invalida.!', 'Solo se aceptan letras min: 2, max: 30');
      return;
    }

    /*----- Valiadtion of state ----- */
    const stateValidation = new FormControl(state, [Validators.minLength(2), Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]*') ,Validators.required] );
    if(stateValidation.errors){
      await this.presentAlert('Estado invalido.!', 'Solo se aceptan letras min: 2, max: 30');
      return;
    }

    /*----- Valiadtion of intNumber ----- */
    const intNumberValidation = new FormControl(intNumber, [Validators.minLength(1), Validators.maxLength(8),
      Validators.pattern('[0-9]*')] );
    if(intNumberValidation.errors){
      await this.presentAlert('Nombre(s) invalido.!', 'Solo se aceptan numeros min: 1, max: 8');
      return;
    }

    /*----- Valiadtion of crossStreet1 ----- */
    const crossStreet1Validation = new FormControl(crossStreet1, [Validators.minLength(1), Validators.maxLength(30),
      Validators.pattern('[a-zA-Z0-9 ]*') ] );
    if(crossStreet1Validation.errors){
      await this.presentAlert('Calle que cruza 1 invalido.!', 'Solo se aceptan alphanumericos min: 1, max: 30');
      return;
    }

    /*----- Valiadtion of crossStreet2 ----- */
    const crossStreet2Validation = new FormControl(crossStreet2, [Validators.minLength(1), Validators.maxLength(30),
      Validators.pattern('[a-zA-Z0-9 ]*')] );
    if(crossStreet2Validation.errors){
      await this.presentAlert('Calle que cruza 2 invalida.!', 'Solo se aceptan alphanumericos min: 1, max: 30');
      return;
    }

    this.firebaseService.registerUser( this.user.email, this.user.password );
    const dataUserCreated = await this.firebaseService.getCurrentUser();

    this.userToRegister.uid = dataUserCreated.uid;
    this.userToRegister.email = this.user.email;
    this.userToRegister.userInformation.telephone = this.user.telephone;
    this.userToRegister.userInformation.names = names;
    this.userToRegister.userInformation.lastName = lastName;
    this.userToRegister.userInformation.date = date;
    this.userToRegister.userInformation.gender = gender;
    this.userToRegister.userInformation.street = street;
    this.userToRegister.userInformation.zipCode = zipCode;
    this.userToRegister.userInformation.numberStreet = numberStreet;
    this.userToRegister.userInformation.city = city;
    this.userToRegister.userInformation.state = state;
    this.userToRegister.userInformation.intNumber = intNumber;
    this.userToRegister.userInformation.crossStreet1 = crossStreet1;
    this.userToRegister.userInformation.crossStreet2 = crossStreet2;

    await this.fireStoreService.registerUserDB( this.userToRegister, this.userTempId );

    await this.userService.setTokenLogin(this.userTempId);

    this.navCtrl.navigateForward('/tabs/tab0');
    }
}

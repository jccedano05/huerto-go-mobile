import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { IonicModule, AlertController, NavController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login.page';
import { UserService } from '../../services/user.service';
import { FirebaseService } from '../../services/firebase.service';
import { of } from 'rxjs';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let navCtrl: NavController;
  let userService: UserService;
  let firebaseService: FirebaseService;
  let alertController: AlertController;

  beforeEach(async () => {
    const navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateRoot']);
    const userServiceSpy = jasmine.createSpyObj('UserService', [
      'setTokenLogin',
    ]);
    const firebaseServiceSpy = jasmine.createSpyObj('FirebaseService', [
      'login',
      'loginWithGmail',
      'loginWithFacebook',
    ]);
    const alertControllerSpy = jasmine.createSpyObj('AlertController', [
      'create',
    ]);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: NavController, useValue: navCtrlSpy },
        { provide: UserService, useValue: userServiceSpy },
        { provide: FirebaseService, useValue: firebaseServiceSpy },
        { provide: AlertController, useValue: alertControllerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
    userService = TestBed.inject(UserService);
    firebaseService = TestBed.inject(FirebaseService);
    alertController = TestBed.inject(AlertController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set userEmail on emailEvent call', () => {
    const email = 'test@example.com';
    component.emailEvent(email);
    expect(component.userEmail).toBe(email);
  });

  it('should set userPassword on passwordEvent call', () => {
    const password = 'password123';
    component.passwordEvent(password);
    expect(component.userPassword).toBe(password);
  });

  it('should navigate to /tabs/tab0 on successful login', fakeAsync(() => {
    const email = 'test@example.com';
    const password = 'password123';
    const userResponse = { user: { uid: '12345' } };
    (firebaseService.login as jasmine.Spy).and.returnValue(
      Promise.resolve(userResponse)
    );
    (userService.setTokenLogin as jasmine.Spy).and.returnValue(
      Promise.resolve()
    );

    component.onClickStartSession(email, password);
    tick();

    expect(firebaseService.login).toHaveBeenCalledWith(email, password);
    expect(userService.setTokenLogin).toHaveBeenCalledWith('12345');
    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/tabs/tab0');
  }));

  it('should present alert on login error', fakeAsync(() => {
    const email = 'test@example.com';
    const password = 'password123';
    (firebaseService.login as jasmine.Spy).and.returnValue(
      Promise.reject('error')
    );

    spyOn(component, 'presentAlert');
    component.onClickStartSession(email, password);
    tick();

    expect(firebaseService.login).toHaveBeenCalledWith(email, password);
    expect(component.presentAlert).toHaveBeenCalled();
  }));

  it('should navigate to /tabs/tab0 on successful Gmail login', fakeAsync(() => {
    const userResponse = { user: { uid: '12345' } };
    (firebaseService.loginWithGmail as jasmine.Spy).and.returnValue(
      Promise.resolve(userResponse)
    );

    component.onClickGmail();
    tick();

    expect(firebaseService.loginWithGmail).toHaveBeenCalled();
    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/tabs/tab0');
  }));

  it('should present alert on Gmail login error', fakeAsync(() => {
    (firebaseService.loginWithGmail as jasmine.Spy).and.returnValue(
      Promise.reject('error')
    );

    spyOn(component, 'presentAlert');
    component.onClickGmail();
    tick();

    expect(firebaseService.loginWithGmail).toHaveBeenCalled();
    expect(component.presentAlert).toHaveBeenCalled();
  }));

  it('should call loginWithFacebook on onClickFacebook call', () => {
    component.onClickFacebook();
    expect(firebaseService.loginWithFacebook).toHaveBeenCalled();
  });

  it('should create an alert on presentAlert call', fakeAsync(() => {
    const alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
    (alertController.create as jasmine.Spy).and.returnValue(
      Promise.resolve(alertSpy)
    );

    component.presentAlert();
    tick();

    expect(alertController.create).toHaveBeenCalledWith({
      cssClass: 'my-custom-class',
      header: 'Error al ingresar',
      message: 'Usuario y/o Contraseña no validos',
      buttons: ['OK'],
    });
    expect(alertSpy.present).toHaveBeenCalled();
  }));
});

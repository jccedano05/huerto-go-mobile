import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { ForgotPasswordPage } from './forgot-password.page';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { of } from 'rxjs';

describe('ForgotPasswordPage', () => {
  let component: ForgotPasswordPage;
  let fixture: ComponentFixture<ForgotPasswordPage>;
  let mockNavController;
  let mockUserService;
  let mockAlertController;

  beforeEach(waitForAsync(() => {
    mockNavController = jasmine.createSpyObj('NavController', ['navigateRoot']);
    mockUserService = jasmine.createSpyObj('UserService', ['findEmail']);
    mockAlertController = jasmine.createSpyObj('AlertController', ['create']);

    TestBed.configureTestingModule({
      declarations: [ForgotPasswordPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: NavController, useValue: mockNavController },
        { provide: UserService, useValue: mockUserService },
        { provide: AlertController, useValue: mockAlertController },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call UserService.findEmail() on onClickConfirm()', async () => {
    const email = 'test@example.com';
    mockUserService.findEmail.and.returnValue(of(true)); // Mocking that email exists

    await component.onClickConfirm(email);

    expect(mockUserService.findEmail).toHaveBeenCalledWith(email);
  });

  it('should call presentAlert() when email exists', async () => {
    const email = 'test@example.com';
    mockUserService.findEmail.and.returnValue(of(true)); // Mocking that email exists

    spyOn(component, 'presentAlert');

    await component.onClickConfirm(email);

    expect(component.presentAlert).toHaveBeenCalledWith(
      'Envio de correo exitoso',
      'Llegara un correo con los pasos a seguir para recuperar tu contraseña'
    );
  });

  it('should navigate to login on onClickCancel()', () => {
    component.onClickCancel();

    expect(mockNavController.navigateRoot).toHaveBeenCalledWith('/login');
  });

  it('should set email on emailEvent()', () => {
    const testEmail = 'test@example.com';
    component.emailEvent(testEmail);

    expect(component.email).toEqual(testEmail);
  });

  it('should create an alert with correct parameters on presentAlert()', async () => {
    const title = 'Test Title';
    const message = 'Test Message';

    const mockAlert = jasmine.createSpyObj('Alert', ['present']);
    mockAlertController.create.and.returnValue(Promise.resolve(mockAlert));

    await component.presentAlert(title, message);

    expect(mockAlertController.create).toHaveBeenCalledWith({
      cssClass: 'my-custom-class',
      header: title,
      message: message,
      buttons: ['OK'],
    });

    expect(mockAlert.present).toHaveBeenCalled();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

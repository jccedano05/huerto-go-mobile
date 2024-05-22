import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { SignupPage } from './signup.page';
import { UserService } from '../../services/user.service';
import { FirestoreService } from '../../services/firestore.service';
import { of } from 'rxjs';

class MockUserService {
  findEmail(email: string) {
    return of(true); // Simula que el email no existe en la base de datos
  }
}

class MockFirestoreService {
  tempUserRegister(email: string, password: string, telephone: number) {
    // Simulación del método de registro temporal
  }
}

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;
  let alertController: AlertController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SignupPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: FirestoreService, useClass: MockFirestoreService },
        NavController,
        AlertController,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show alert if email is invalid', async () => {
    spyOn(component, 'presentAlert');
    await component.onClickNext(
      'invalid-email',
      'Password123',
      'Password123',
      1234567890
    );
    expect(component.presentAlert).toHaveBeenCalledWith(
      'Correo electronico invalido.!',
      'Verifica que el correo electronico sea escrito de manera valida'
    );
  });

  it('should show alert if passwords do not match', async () => {
    spyOn(component, 'presentAlert');
    await component.onClickNext(
      'test@example.com',
      'Password123',
      'Password456',
      1234567890
    );
    expect(component.presentAlert).toHaveBeenCalledWith(
      'Contraseñas diferentes.!',
      'La contraseña deben de ser iguales para confirmar'
    );
  });

  it('should show alert if telephone is invalid', async () => {
    spyOn(component, 'presentAlert');
    await component.onClickNext(
      'test@example.com',
      'Password123',
      'Password123',
      '123asd'
    );
    expect(component.presentAlert).toHaveBeenCalledWith(
      'Telefono invalido.!',
      'Deben de ser solo numeros (10) y si agregas lada de pais (12, omitir el +)'
    );
  });

  it('should navigate forward if all inputs are valid', async () => {
    spyOn(component.navCtrl, 'navigateForward');
    await component.onClickNext(
      'test@example.com',
      'Password123',
      'Password123',
      1234567890
    );
    expect(component.navCtrl.navigateForward).toHaveBeenCalledWith(
      '/signup-form',
      { queryParams: { email: 'test@example.com' } }
    );
  });
});

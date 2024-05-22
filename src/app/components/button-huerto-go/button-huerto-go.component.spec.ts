import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ButtonHuertoGoComponent } from './button-huerto-go.component';
import { By } from '@angular/platform-browser';

describe('ButtonHuertoGoComponent', () => {
  let component: ButtonHuertoGoComponent;
  let fixture: ComponentFixture<ButtonHuertoGoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonHuertoGoComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonHuertoGoComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button with provided color and label', () => {
    component.color = '#57B41B';
    component.labelInput = 'Agregar';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(
      By.css('ion-button')
    ).nativeElement;
    expect(buttonElement.textContent).toContain('Agregar');
    expect(buttonElement.style.backgroundColor).toBe('rgb(87, 180, 27)');
  });

  it('should render button with different color and label', () => {
    component.color = '#4287f5';
    component.labelInput = 'Guardar';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(
      By.css('ion-button')
    ).nativeElement;
    expect(buttonElement.textContent).toContain('Guardar');
    expect(buttonElement.style.backgroundColor).toBe('rgb(66, 135, 245)');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit inputValue on key press', () => {
    spyOn(component.inputValue, 'emit');
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('ion-input');
    inputElement.value = 'Test Value';
    inputElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.inputValue.emit).toHaveBeenCalledWith('Test Value');
  });
});

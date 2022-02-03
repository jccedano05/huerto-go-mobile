import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonHuertoGoComponent } from './button-huerto-go.component';

describe('ButtonHuertoGoComponent', () => {
  let component: ButtonHuertoGoComponent;
  let fixture: ComponentFixture<ButtonHuertoGoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHuertoGoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonHuertoGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

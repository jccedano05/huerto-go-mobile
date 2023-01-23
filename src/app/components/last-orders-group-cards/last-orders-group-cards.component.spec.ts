import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastOrdersGroupCardsComponent } from './last-orders-group-cards.component';

describe('LastOrdersGroupCardsComponent', () => {
  let component: LastOrdersGroupCardsComponent;
  let fixture: ComponentFixture<LastOrdersGroupCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LastOrdersGroupCardsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastOrdersGroupCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

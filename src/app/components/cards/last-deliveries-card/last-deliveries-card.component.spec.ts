import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LastDeliveriesCardComponent } from './last-deliveries-card.component';

describe('LastDeliveriesCardComponent', () => {
  let component: LastDeliveriesCardComponent;
  let fixture: ComponentFixture<LastDeliveriesCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LastDeliveriesCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LastDeliveriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display delivery details correctly', () => {
    component.deliveryId = 1;
    component.dateDDMMYY = '21/05/2024';
    component.timeHHMM = '10:00';
    component.totalPrice = 100;

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const deliveryId = element.querySelector('.deliveryId span');
    const deliveryDate = element.querySelector('.deliveryDate p');
    const totalPrice = element.querySelector('.rightSide h4');

    expect(deliveryId.textContent).toContain('1');
    expect(deliveryDate.textContent).toContain('21/05/2024');
    expect(deliveryDate.textContent).toContain('10:00 Hr');
    expect(totalPrice.textContent).toContain('$100.00 MXN');
  });
});

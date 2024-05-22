import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PayAndOrderPage } from './pay-and-order.page';
import { By } from '@angular/platform-browser';

describe('PayAndOrderPage', () => {
  let component: PayAndOrderPage;
  let fixture: ComponentFixture<PayAndOrderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PayAndOrderPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PayAndOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set program delivery', () => {
    const time = 'Tiempo estimado de entrega 00:00 Hr';
    component.setProgramDelivery(time);

    expect(component.isTimeDeliverySelected).toBeTrue();
  });

  it('should set package chosen', () => {
    const packageChosen = 'Empaque No.1';
    component.setPackageChoosen(packageChosen);

    expect(component.isPackageSelected).toBeTrue();
  });

  it('should set card chosen', () => {
    const card = '4545 4545 4545 4545';
    spyOn(console, 'log');

    component.setCardChoosen(card);

    expect(console.log).toHaveBeenCalledWith(card);
  });

  it('should set coupon discount', () => {
    const couponValue = 'Cupon 1';
    spyOn(console, 'log');

    component.setCouponDiscount(couponValue);

    expect(console.log).toHaveBeenCalledWith(couponValue);
  });

  it('should set address selected', () => {
    const address = 'Rio Verde 2780';
    spyOn(console, 'log');

    component.setAdressSelect(address);

    expect(console.log).toHaveBeenCalledWith(address);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

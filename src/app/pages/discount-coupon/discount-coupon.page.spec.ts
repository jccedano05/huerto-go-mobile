import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DiscountCouponPage } from './discount-coupon.page';

describe('DiscountCouponPage', () => {
  let component: DiscountCouponPage;
  let fixture: ComponentFixture<DiscountCouponPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountCouponPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountCouponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if coupon exists', () => {
    const coupon = 'Majo1997';
    expect(component.isCouponExist(coupon)).toBeTruthy();
  });

  it('should return false if coupon does not exist', () => {
    const coupon = 'InvalidCoupon';
    expect(component.isCouponExist(coupon)).toBeFalsy();
  });

  it('should set incorrectCoupon to false on valid coupon', () => {
    const coupon = 'Majo1997';
    component.onClickAgree(coupon);
    expect(component.incorrectCoupon).toBeFalsy();
  });

  it('should set incorrectCoupon to true on invalid coupon', () => {
    const coupon = 'InvalidCoupon';
    component.onClickAgree(coupon);
    expect(component.incorrectCoupon).toBeTruthy();
  });

  it('should not log message on invalid coupon', () => {
    const coupon = 'InvalidCoupon';
    spyOn(console, 'log');

    component.onClickAgree(coupon);

    expect(console.log).not.toHaveBeenCalledWith(
      'se agrego el cupon correctamente'
    );
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

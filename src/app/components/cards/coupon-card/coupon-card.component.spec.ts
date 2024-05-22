import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { CouponCardComponent } from './coupon-card.component';

describe('CouponCardComponent', () => {
  let component: CouponCardComponent;
  let fixture: ComponentFixture<CouponCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CouponCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CouponCardComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render coupon type name and quantity', () => {
    component.couponTypeName = 'Descuento';
    component.quantityCoupons = '10';
    fixture.detectChanges();

    const couponTypeNameElement = fixture.debugElement.query(
      By.css('.labelImage p')
    ).nativeElement;
    const quantityCouponsElement = fixture.debugElement.query(
      By.css('.quantityAndShow h4')
    ).nativeElement;

    expect(couponTypeNameElement.textContent).toContain('Descuento');
    expect(quantityCouponsElement.textContent).toContain('10');
  });

  it('should render the correct image sources', () => {
    fixture.detectChanges();

    const labelImageElement = fixture.debugElement.query(
      By.css('.labelImage img')
    ).nativeElement;
    const quantityAndShowElement = fixture.debugElement.query(
      By.css('.quantityAndShow img')
    ).nativeElement;

    expect(labelImageElement.src).toContain(
      'assets/huertoGo/ANDROID/009_Perfil/002_Perfil/003_icon_Check.svg'
    );
    expect(quantityAndShowElement.src).toContain(
      'assets/huertoGo/ANDROID/009_Perfil/002_Perfil/002_Btn_Arrow.svg'
    );
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

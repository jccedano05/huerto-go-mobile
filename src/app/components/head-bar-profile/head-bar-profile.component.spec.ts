import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { HeadBarProfileComponent } from './head-bar-profile.component';

describe('HeadBarProfileComponent', () => {
  let component: HeadBarProfileComponent;
  let fixture: ComponentFixture<HeadBarProfileComponent>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeEach(waitForAsync(() => {
    const navSpy = jasmine.createSpyObj('NavController', [
      'navigateBack',
      'navigateForward',
    ]);

    TestBed.configureTestingModule({
      declarations: [HeadBarProfileComponent],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: NavController, useValue: navSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadBarProfileComponent);
    component = fixture.componentInstance;
    navCtrlSpy = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back to /tabs/tab4 when onClickBack is called', () => {
    component.onClickBack();
    expect(navCtrlSpy.navigateBack).toHaveBeenCalledWith('/tabs/tab4');
  });

  it('should navigate forward to /products-cart-list when onClickCart is called', () => {
    component.onClickCart();
    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith(
      '/products-cart-list'
    );
  });
});

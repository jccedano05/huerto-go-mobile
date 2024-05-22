import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ProductsCartListPage } from './products-cart-list.page';
import { By } from '@angular/platform-browser';

describe('ProductsCartListPage', () => {
  let component: ProductsCartListPage;
  let fixture: ComponentFixture<ProductsCartListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsCartListPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsCartListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize listProductsExample and calculate total price on ngOnInit', () => {
    component.ngOnInit();
    expect(component.listProductsExample.length).toBeGreaterThan(0);
    expect(component.totalPriceCart).toBeGreaterThan(0);
  });

  it('should calculate total price correctly', () => {
    const products = [
      {
        id: 1,
        imageProduct: '',
        title: 'Product 1',
        price: 10,
        quantity: 1,
        unit: 'kg',
      },
      {
        id: 2,
        imageProduct: '',
        title: 'Product 2',
        price: 5,
        quantity: 2,
        unit: 'kg',
      },
    ];
    component.calcTotalPrice(products);
    expect(component.totalPriceCart).toBe(20); // 10*1 + 5*2
  });

  it('should delete a product and recalculate total price', () => {
    component.ngOnInit();
    const initialLength = component.listProductsExample.length;
    component.deleteProduct(1);
    expect(component.listProductsExample.length).toBe(initialLength - 1);
    expect(component.totalPriceCart).toBeLessThan(122);
  });

  it('should clear the list of products on onClickDelete', () => {
    component.ngOnInit();
    component.onClickDelete();
    expect(component.listProductsExample.length).toBe(0);
    expect(component.totalPriceCart).toBe(0);
  });

  it('should log click on back', () => {
    spyOn(console, 'log');
    component.onClickBack();
    expect(console.log).toHaveBeenCalledWith('click on back');
  });

  it('should handle addRestQuantity event and recalculate total price', () => {
    component.ngOnInit();
    const initialTotal = component.totalPriceCart;
    component.addRestQuantity(null);
    expect(component.totalPriceCart).toBe(initialTotal);
  });

  it('should handle click on pay button', () => {
    component.ngOnInit();
    const button = fixture.debugElement.query(By.css('.aceptarButton'));
    button.triggerEventHandler('click', null);
  });

  it('should render the correct number of products', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const productElements = fixture.debugElement.queryAll(
      By.css('app-cart-product-card')
    );
    expect(productElements.length).toBe(component.listProductsExample.length);
  });
});

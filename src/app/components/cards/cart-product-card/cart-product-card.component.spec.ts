import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { CartProductCardComponent } from './cart-product-card.component';
import { DebugElement } from '@angular/core';

interface ProductToShop {
  id: number;
  imageProduct: string;
  title: string;
  price: number;
  quantity: number;
  unit: string;
}

describe('CartProductCardComponent', () => {
  let component: CartProductCardComponent;
  let fixture: ComponentFixture<CartProductCardComponent>;
  let debugElement: DebugElement;

  const productMock: ProductToShop = {
    id: 1,
    imageProduct: 'test-image.png',
    title: 'Test Product',
    price: 10,
    quantity: 1,
    unit: 'pza',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartProductCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CartProductCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.productToShop = productMock;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addRestQuantity with "enviando menos" when onClickMinus is called and unit is "pza"', () => {
    spyOn(component.addRestQuantity, 'emit');
    component.onClickMinus();
    expect(component.addRestQuantity.emit).toHaveBeenCalledWith(
      'enviando menos'
    );
  });

  it('should emit addRestQuantity with "enviando menos" when onClickMinus is called and unit is "kg"', () => {
    component.productToShop.unit = 'kg';
    component.productToShop.quantity = 1;
    spyOn(component.addRestQuantity, 'emit');
    component.onClickMinus();
    expect(component.productToShop.quantity).toBe(0.9);
    expect(component.addRestQuantity.emit).toHaveBeenCalledWith(
      'enviando menos'
    );
  });

  it('should emit addRestQuantity with "enviando mas" when onClickPlus is called and unit is "pza"', () => {
    spyOn(component.addRestQuantity, 'emit');
    component.onClickPlus();
    expect(component.addRestQuantity.emit).toHaveBeenCalledWith('enviando mas');
  });

  it('should emit addRestQuantity with "enviando mas" when onClickPlus is called and unit is "kg"', () => {
    component.productToShop.unit = 'kg';
    component.productToShop.quantity = 1;
    spyOn(component.addRestQuantity, 'emit');
    component.onClickPlus();
    expect(component.productToShop.quantity).toBe(1.1);
    expect(component.addRestQuantity.emit).toHaveBeenCalledWith('enviando mas');
  });

  it('should emit deleteProduct with product id when onClickDelete is called', () => {
    spyOn(component.deleteProduct, 'emit');
    component.onClickDelete();
    expect(component.deleteProduct.emit).toHaveBeenCalledWith(productMock.id);
  });
});

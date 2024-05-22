import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActualOrderComponent } from './actual-order.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ActualOrderComponent', () => {
  let component: ActualOrderComponent;
  let fixture: ComponentFixture<ActualOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ActualOrderComponent],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial direction as "Calle - Rio Verde 2780"', () => {
    expect(component.direction).toBe('Calle - Rio Verde 2780');
  });

  it('should have initial counter value as 8', () => {
    expect(component.counter).toBe(8);
  });

  it('should have initial quantityProducts value as "00"', () => {
    expect(component.quantityProducts).toBe('00');
  });

  it('should have a list of products', () => {
    expect(component.productList.length).toBe(2);
    expect(component.productList[0].name).toBe('Jitomate Saladet');
  });

  it('should call onChangeAdress method when change address button is clicked', () => {
    spyOn(component, 'onChangeAdress');

    const button = fixture.debugElement.query(By.css('.buttonChangeDirection'));
    button.triggerEventHandler('click', null);

    expect(component.onChangeAdress).toHaveBeenCalled();
  });

  it('should call onChangeProducts method when change products button is clicked', () => {
    spyOn(component, 'onChangeProducts');

    const button = fixture.debugElement.query(By.css('.buttonChangeProducts'));
    button.triggerEventHandler('click', null);

    expect(component.onChangeProducts).toHaveBeenCalled();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

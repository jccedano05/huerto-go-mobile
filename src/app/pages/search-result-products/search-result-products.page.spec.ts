import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SearchResultProductsPage } from './search-result-products.page';
import { sectionList } from 'src/app/test/list-products';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SearchResultProductsPage', () => {
  let component: SearchResultProductsPage;
  let fixture: ComponentFixture<SearchResultProductsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultProductsPage],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct number of products in listItemsTop', () => {
    expect(component.listItemsTop.length).toBe(
      Math.ceil(sectionList.length / 2)
    );
  });

  it('should have the correct number of products in listItemsBottom', () => {
    expect(component.listItemsBottom.length).toBe(
      Math.floor(sectionList.length / 2)
    );
  });

  it('should have the correct total number of products', () => {
    expect(component.totalProducts).toBe(sectionList.length);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

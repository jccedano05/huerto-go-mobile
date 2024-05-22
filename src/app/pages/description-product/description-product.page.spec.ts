import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DescriptionProductPage } from './description-product.page';
import { sectionList } from '../../test/list-products';
import { of } from 'rxjs';

describe('DescriptionProductPage', () => {
  let component: DescriptionProductPage;
  let fixture: ComponentFixture<DescriptionProductPage>;
  let activatedRoute: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionProductPage],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }), // Simula el parámetro 'id' con valor '1'
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionProductPage);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load product on init', () => {
    expect(component.product).toBeDefined();
    expect(component.product.title).toEqual(sectionList[0].title); // Ajusta según tu lista de productos de prueba
  });

  it('should set isFavorite to true when clicking favorite button', () => {
    component.isFavorite = false;
    component.onClickFavorite();
    expect(component.isFavorite).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

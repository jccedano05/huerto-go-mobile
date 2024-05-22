import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DescriptionRecipePage } from './description-recipe.page';
import { sectionRecipesList } from 'src/app/test/list-recipes';
import { of } from 'rxjs';

describe('DescriptionRecipePage', () => {
  let component: DescriptionRecipePage;
  let fixture: ComponentFixture<DescriptionRecipePage>;
  let activatedRoute: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionRecipePage],
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

    fixture = TestBed.createComponent(DescriptionRecipePage);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load recipe on init', () => {
    expect(component.recipe).toBeDefined();
    expect(component.recipe.title).toEqual(sectionRecipesList[0].title); // Ajusta según tu lista de recetas de prueba
  });

  it('should set isFavorite to true when clicking favorite button', () => {
    component.isFavorite = false;
    component.onClickFavorite();
    expect(component.isFavorite).toBeTruthy();
  });

  it('should increment numberOfDishes when calling addDish', () => {
    const initialNumberOfDishes = component.numberOfDishes;
    component.addDish();
    expect(component.numberOfDishes).toEqual(initialNumberOfDishes + 1);
  });

  it('should decrement numberOfDishes when calling substactDish', () => {
    component.numberOfDishes = 2;
    component.substactDish();
    expect(component.numberOfDishes).toEqual(1);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListRecipesXscrollComponent } from './list-recipes-xscroll.component';

describe('ListRecipesXscrollComponent', () => {
  let component: ListRecipesXscrollComponent;
  let fixture: ComponentFixture<ListRecipesXscrollComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecipesXscrollComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListRecipesXscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

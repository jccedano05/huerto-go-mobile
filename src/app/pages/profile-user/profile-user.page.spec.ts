import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { ProfileUserPage } from './profile-user.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProfileUserPage', () => {
  let component: ProfileUserPage;
  let fixture: ComponentFixture<ProfileUserPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUserPage],
      imports: [IonicModule.forRoot(), FormsModule], // Importar FormsModule
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the initial itemSelected value as "account"', () => {
    expect(component.itemSelected).toBe('account');
  });

  it('should call selectOption method on ionChange event', () => {
    spyOn(component, 'selectOption');

    const selectElement: HTMLSelectElement =
      fixture.nativeElement.querySelector('select');
    selectElement.value = 'data';
    selectElement.dispatchEvent(new Event('ionChange'));

    fixture.detectChanges();

    expect(component.selectOption).toHaveBeenCalledWith('account');
  });

  it('should call selectOption method on ion-select change', () => {
    spyOn(component, 'selectOption');

    const ionSelect: HTMLElement =
      fixture.nativeElement.querySelector('ion-select');
    ionSelect.dispatchEvent(
      new CustomEvent('ionChange', { detail: { value: 'direction' } })
    );

    fixture.detectChanges();

    expect(component.selectOption).toHaveBeenCalledWith('account');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});

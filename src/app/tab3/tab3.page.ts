import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Recipe } from '../interfaces/Recipe';
import { sectionList } from '../test/list-products';
import { sectionRecipesList } from '../test/list-recipes';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  listRecipes: Recipe[] = sectionRecipesList;

  listItems: Product[] = sectionList;

  constructor() {}
}

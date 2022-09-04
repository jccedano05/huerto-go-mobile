import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Recipe } from '../interfaces/Recipe';
import { sectionList } from '../test/list-products';
import { sectionRecipesList } from '../test/list-recipes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  listRecipes: Recipe[] = sectionRecipesList;

  constructor() {}
}

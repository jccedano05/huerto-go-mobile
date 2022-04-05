import { Component } from '@angular/core';
import { Recipe } from '../interfaces/Recipe';
import { sectionRecipesList } from '../test/list-recipes';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  recipe: Recipe = sectionRecipesList[0];

  constructor() {}

}

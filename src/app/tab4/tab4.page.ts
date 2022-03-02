import { Component } from '@angular/core';
import { Recipe } from '../interfaces/Recipe';
import { sectionRecipesList } from '../test/list-recipes';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {


  recipe: Recipe = sectionRecipesList[0];

  constructor() {}

}

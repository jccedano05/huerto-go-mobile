import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { Recipe } from 'src/app/interfaces/Recipe';
import { sectionList } from 'src/app/test/list-products';
import { sectionRecipesList } from 'src/app/test/list-recipes';

@Component({
  selector: 'app-description-recipe',
  templateUrl: './description-recipe.page.html',
  styleUrls: ['./description-recipe.page.scss'],
})
export class DescriptionRecipePage implements OnInit {
  recipe: Recipe;

  isFavorite: boolean;
  numberOfDishes = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params.id);
      this.recipe = sectionRecipesList.find((p) => p.id === params.id);
    });
  }

  onClickFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  addDish() {
    console.log(this.numberOfDishes);
    this.numberOfDishes += 1;
  }

  substactDish() {
    if (this.numberOfDishes > 0) {
      this.numberOfDishes -= 1;
    }
  }
}

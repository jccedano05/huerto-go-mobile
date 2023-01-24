import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Recipe } from '../../../interfaces/Recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;

  isFavorite: boolean;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
  onButtonPlus() {
    this.navCtrl.navigateForward(`/description-recipe/${this.recipe.id}`);
  }
}

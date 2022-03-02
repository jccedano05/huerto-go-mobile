import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../interfaces/Recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;

  isFavorite: boolean;

  constructor() { }

  ngOnInit() {}


  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}

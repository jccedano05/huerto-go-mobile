import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/Recipe';

@Component({
  selector: 'app-list-recipes-xscroll',
  templateUrl: './list-recipes-xscroll.component.html',
  styleUrls: ['./list-recipes-xscroll.component.scss'],
})
export class ListRecipesXscrollComponent implements OnInit {
  @Input() listRecipes?: Recipe[];

  constructor() {}

  ngOnInit() {}
}

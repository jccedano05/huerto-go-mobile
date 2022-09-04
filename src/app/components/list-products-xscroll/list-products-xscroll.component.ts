import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { Recipe } from '../../interfaces/Recipe';

@Component({
  selector: 'app-list-products-xscroll',
  templateUrl: './list-products-xscroll.component.html',
  styleUrls: ['./list-products-xscroll.component.scss'],
})
export class ListProductsXscrollComponent implements OnInit {
  @Input() listProducts?: Product[];
  @Input() listRecipes?: Recipe[];
  @Input() typeCard: string;

  @Input() sectionValue: string;
  constructor() {}

  ngOnInit() {}
}

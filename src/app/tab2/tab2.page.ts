import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';
import { sectionList } from '../test/list-products';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listRecipes: Product [] = sectionList;

  constructor() {}

}

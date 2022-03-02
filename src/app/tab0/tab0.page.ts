import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';
import { sectionList } from '../test/list-products';

@Component({
  selector: 'app-tab0',
  templateUrl: 'tab0.page.html',
  styleUrls: ['tab0.page.scss']
})
export class Tab0Page {

  listItems: Product [] = sectionList;

  constructor() {}

}

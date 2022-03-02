import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { sectionList } from 'src/app/test/list-products';

@Component({
  selector: 'app-search-result-products',
  templateUrl: './search-result-products.page.html',
  styleUrls: ['./search-result-products.page.scss'],
})
export class SearchResultProductsPage implements OnInit {

  listItemsTop: Product [] = sectionList.slice(0,(sectionList.length/2));

  listItemsBottom: Product [] = sectionList.slice(sectionList.length/2, sectionList.length);

  totalProducts = sectionList.length;

  constructor() { }

  ngOnInit() {
  }

}

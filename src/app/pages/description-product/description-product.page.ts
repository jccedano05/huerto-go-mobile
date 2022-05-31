import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { sectionList } from '../../test/list-products';

@Component({
  selector: 'app-description-product',
  templateUrl: './description-product.page.html',
  styleUrls: ['./description-product.page.scss'],
})
export class DescriptionProductPage implements OnInit {


  product: Product;

  isFavorite: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  this.route.params.subscribe(
    (params: Params) => {
      console.log(params.id);
      this.product = sectionList.find( p => p.id === params.id);
    }
  );
  }


  onClickFavorite() {
    this.isFavorite = !this.isFavorite;
  }


}

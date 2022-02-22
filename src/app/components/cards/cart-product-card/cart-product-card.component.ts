import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface ProductToShop{
  id: number;
  imageProduct: string;
  title: string;
  price: number;
  quantity: number;
  unit: string;
}

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss'],
})
export class CartProductCardComponent implements OnInit {

  @Input() productToShop: ProductToShop;
  @Output() deleteProduct = new EventEmitter();
  @Output() addRestQuantity = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClickMinus(){
    if(this.productToShop.quantity > 0.10  && this.productToShop.unit.toLowerCase() === 'kg'){
    this.productToShop.quantity = this.productToShop.quantity - 0.1;
    }
    else if(this.productToShop.quantity > 0.10  && this.productToShop.unit.toLowerCase() === 'pza'){
      this.productToShop.quantity = this.productToShop.quantity - 1;
      }
    this.addRestQuantity.emit('enviando menos');
  }

  onClickPlus(){
    if(this.productToShop.quantity < 49.90 && this.productToShop.unit.toLowerCase() === 'kg'){
      this.productToShop.quantity = this.productToShop.quantity + 0.1;
    }
    else if(this.productToShop.quantity < 199.90 && this.productToShop.unit.toLowerCase() === 'pza'){
      this.productToShop.quantity = this.productToShop.quantity + 1;
    }
    this.addRestQuantity.emit('enviando mas');
  }

  onClickDelete(){
    this.deleteProduct.emit(this.productToShop.id);
  }

}

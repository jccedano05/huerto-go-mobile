import { Component, Input, OnInit } from '@angular/core';


interface ProductToShop{
    id: number;
    imageProduct: string;
    title: string;
    price: number;
    quantity: number;
    unit: string;
}


@Component({
  selector: 'app-products-cart-list',
  templateUrl: './products-cart-list.page.html',
  styleUrls: ['./products-cart-list.page.scss'],
})
export class ProductsCartListPage implements OnInit {


  listProductsExample: ProductToShop[];
  totalPriceCart: number;
  constructor() { }

  ngOnInit() {
    this.listProductsExample = [{
      id: 1,
      // eslint-disable-next-line max-len
      imageProduct: 'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
      title: 'Naranja USA',
      price: 3.20,
      quantity: 1,
      unit: 'pza'
    },
    {
      id: 2,
      // eslint-disable-next-line max-len
      imageProduct: 'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
      title: 'Naranja Mexico',
      price: 16.30,
      quantity: 0.20,
      unit: 'kg'
    },
    {
      id: 3,
      // eslint-disable-next-line max-len
      imageProduct: 'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
      title: 'Naranja Canada',
      price: 16.30,
      quantity: 3.00,
      unit: 'kg'
    },
    {
      id: 4,
      // eslint-disable-next-line max-len
      imageProduct: 'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
      title: 'Naranja India',
      price: 16.30,
      quantity: 1.50,
      unit: 'kg'
    },
    {
      id: 5,
      // eslint-disable-next-line max-len
      imageProduct: 'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
      title: 'Naranja Peru',
      price: 16.30,
      quantity: 2.25,
      unit: 'kg'
    },
    {
      id: 6,
      // eslint-disable-next-line max-len
      imageProduct: 'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
      title: 'Naranja EUA',
      price: 16.30,
      quantity: 0.50,
      unit: 'kg'
    }];

    this.calcTotalPrice(this.listProductsExample);
  }

  deleteProduct(id){
    this.listProductsExample = this.listProductsExample.filter( product => product.id !== id );
    this.calcTotalPrice(this.listProductsExample);
  }

  addRestQuantity(event){
    this.calcTotalPrice(this.listProductsExample);
  }

  onClickDelete(){
    this.listProductsExample = [];

    //ALERT si quiere borrar o no
    this.calcTotalPrice(this.listProductsExample);
  }

  onClickBack(){
    console.log('click on back');
  }

  calcTotalPrice(products: ProductToShop[]){
    this.totalPriceCart = 0;
    if (products.length > 0) {
      products.forEach(product => {
        this.totalPriceCart +=  (product.price*product.quantity);
      });
    }
  }
}

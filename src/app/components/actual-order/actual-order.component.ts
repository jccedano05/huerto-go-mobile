import { Component, OnInit } from '@angular/core';

interface ProductCardData {
  name: string;
  image: string;
  price: number;
  quantity: number;
  unit: string;
}


@Component({
  selector: 'app-actual-order',
  templateUrl: './actual-order.component.html',
  styleUrls: ['./actual-order.component.scss'],
})
export class ActualOrderComponent implements OnInit {

  direction: string;

  processingStatus: string;
  preparingStatus: string;
  onDeliveryStatus: string;
  claimedStatus: string;

  counter: number;
  quantityProducts: string;

  productList: ProductCardData[];

  constructor() { }

  ngOnInit() {

    this.direction = 'Calle - Rio Verde 2780';

    this.counter = 8;

    this.quantityProducts = '00';

    this.processingStatus = '1';
    this.preparingStatus = '1';
    this.onDeliveryStatus = '1';
    this.claimedStatus = '1';

    if(this.counter <= 3){
      this.processingStatus = String(this.counter);
    }
    else if(this.counter <= 6){
      this.processingStatus = '3';
      if(this.counter % 3 !== 0){
        this.preparingStatus = String(this.counter % 3);
      } else{
        this.preparingStatus = '3';
      }
    }
    else if(this.counter <= 9){
      this.processingStatus = '3';
      this.preparingStatus = '3';
      if(this.counter % 3 !== 0){
        this.onDeliveryStatus = String(this.counter % 3);
      } else{
        this.onDeliveryStatus = '3';
      }
    }
    else if(this.counter <= 12){
      this.processingStatus = '3';
      this.preparingStatus = '3';
      this.onDeliveryStatus = '3';
      if(this.counter % 3 !== 0){
        this.claimedStatus = String(this.counter % 3);
      } else{
        this.claimedStatus = '3';
      }
    }


    this.productList = [
      {
        name: 'Jitomate Saladet',
        // eslint-disable-next-line max-len
        image: 'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
        price: 16.30,
        quantity: 0.50,
        unit: 'kg'
      },
      {
        name: 'Jitomate Saladet',
        // eslint-disable-next-line max-len
        image: 'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
        price: 16.30,
        quantity: 0.50,
        unit: 'kg'
      }];

  }


  onChangeAdress(){
    console.log('Cambiar domicilio');
  }

  onChangeProducts() {
    console.log('Cambiar Productos');
  }

}

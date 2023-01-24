import { Component, OnInit } from '@angular/core';
import { IStatus } from 'src/app/interfaces/profile/IDeliveries';
import { statusOfOrder } from 'src/app/test/statusOfOrder';

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

  statusProps: string[];

  counter: number;
  quantityProducts: string;

  productList: ProductCardData[];

  statusOrderArray: IStatus[] = statusOfOrder;

  constructor() {}

  ngOnInit() {
    this.direction = 'Calle - Rio Verde 2780';

    this.counter = 8;

    this.quantityProducts = '00';

    this.productList = [
      {
        name: 'Jitomate Saladet',
        // eslint-disable-next-line max-len
        image:
          'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
        price: 16.3,
        quantity: 0.5,
        unit: 'kg',
      },
      {
        name: 'Jitomate Saladet',
        // eslint-disable-next-line max-len
        image:
          'https://thumbs.dreamstime.com/b/fruta-naranja-simple-con-rodajas-aisladas-en-fondo-blanco-fruto-de-%C3%BAnico-169470472.jpg',
        price: 16.3,
        quantity: 0.5,
        unit: 'kg',
      },
    ];
  }

  onChangeAdress() {
    console.log('Cambiar domicilio');
  }

  onChangeProducts() {
    console.log('Cambiar Productos');
  }
}

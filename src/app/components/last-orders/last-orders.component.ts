import { Component, OnInit } from '@angular/core';

interface LastDeliveryItem {
  deliveryId: number;
  dateDDMMYY: string;
  timeHHMM: string;
  totalPrice: number;
}


@Component({
  selector: 'app-last-orders',
  templateUrl: './last-orders.component.html',
  styleUrls: ['./last-orders.component.scss'],
})
export class LastOrdersComponent implements OnInit {

  deliveries: LastDeliveryItem[];

  constructor() { }

  ngOnInit() {
    this.deliveries = [
      { deliveryId: 9987, dateDDMMYY:'09/09/21', timeHHMM: '00:00', totalPrice:0.00}
    ];
  }

}

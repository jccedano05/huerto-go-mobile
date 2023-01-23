/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { DeliveresGroupByDate } from 'src/app/interfaces/profile/PastDeliveries';
import * as moment from 'moment';

@Component({
  selector: 'app-last-orders',
  templateUrl: './last-orders.component.html',
  styleUrls: ['./last-orders.component.scss'],
})
export class LastOrdersComponent implements OnInit {
  objectClass = Object;
  deliveries: DeliveresGroupByDate[] = [];

  constructor() {}

  ngOnInit() {
    this.deliveries.push({
      date: 'Hoy',
      deliveries: [
        {
          deliveryId: 9996,
          dateDDMMYY: moment().format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
      ],
    });

    this.deliveries.push({
      date: 'Ayer',
      deliveries: [
        {
          deliveryId: 9995,
          dateDDMMYY: moment().subtract(1, 'day').format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
      ],
    });

    this.deliveries.push({
      date: 'Semana',
      deliveries: [
        {
          deliveryId: 9994,
          dateDDMMYY: moment().subtract(3, 'day').format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
        {
          deliveryId: 9993,
          dateDDMMYY: moment().subtract(1, 'week').format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
      ],
    });

    this.deliveries.push({
      date: 'Mes',
      deliveries: [
        {
          deliveryId: 9992,
          dateDDMMYY: moment()
            .subtract(1, 'week')
            .subtract(2, 'day')
            .format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
        {
          deliveryId: 9991,
          dateDDMMYY: moment().subtract(2, 'week').format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
        {
          deliveryId: 9990,
          dateDDMMYY: moment().subtract(3, 'week').format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
      ],
    });

    this.deliveries.push({
      date: 'Año',
      deliveries: [
        {
          deliveryId: 9989,
          dateDDMMYY: moment().subtract(4, 'week').format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
        {
          deliveryId: 9988,
          dateDDMMYY: moment().subtract(5, 'week').format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
        {
          deliveryId: 9987,
          dateDDMMYY: moment().subtract(6, 'week').format('DD/MM/YY'),
          timeHHMM: '00:00',
          totalPrice: 0.0,
        },
      ],
    });
  }
}

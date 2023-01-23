import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-delivery-order',
  templateUrl: './status-delivery-order.component.html',
  styleUrls: ['./status-delivery-order.component.scss'],
})
export class StatusDeliveryOrderComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() statusName: string = 'undefined';
  @Input() status: string = 'notYet';

  colorStatusText: string = '#dadada';
  colorStatusProgressBar: string = 'white';

  constructor() {}

  ngOnInit() {
    switch (this.status) {
      case 'inProgress': {
        this.colorStatusText = '#57ae14';
        this.colorStatusProgressBar = '#57ae14';
        break;
      }
      case 'done': {
        this.colorStatusText = 'orange';
        this.colorStatusProgressBar = 'orange';
        break;
      }
      case 'notYet': {
        this.colorStatusText = '#dadada';
        this.colorStatusProgressBar = 'white';
        break;
      }

      default:
        break;
    }
  }
}

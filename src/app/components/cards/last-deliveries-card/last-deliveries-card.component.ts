import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-deliveries-card',
  templateUrl: './last-deliveries-card.component.html',
  styleUrls: ['./last-deliveries-card.component.scss'],
})
export class LastDeliveriesCardComponent implements OnInit {

  @Input() deliveryId: number;
  @Input() dateDDMMYY: string;
  @Input() timeHHMM: string;
  @Input() totalPrice: number;

  constructor() { }

  ngOnInit() {}

}

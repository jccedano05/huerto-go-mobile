import { Component, Input, OnInit } from '@angular/core';
import { LastDeliveryItem } from 'src/app/interfaces/profile/PastDeliveries';

@Component({
  selector: 'app-last-orders-group-cards',
  templateUrl: './last-orders-group-cards.component.html',
  styleUrls: ['./last-orders-group-cards.component.scss'],
})
export class LastOrdersGroupCardsComponent implements OnInit {

  @Input() date: string;
  @Input() deliveries: LastDeliveryItem[];

  constructor() { }

  ngOnInit() {}

}

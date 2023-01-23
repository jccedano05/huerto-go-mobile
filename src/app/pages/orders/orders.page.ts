import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  itemSelected: string;

  constructor() {}

  ngOnInit() {
    this.itemSelected = 'actualOrder';
  }

  selectOption(optionSelected: any) {
    // console.log(optionSelected);
  }
}

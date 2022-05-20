import { Component, OnInit } from '@angular/core';


interface CouponItem {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {

  couponsCards: CouponItem[];

  constructor() { }

  ngOnInit() {
    this.couponsCards = [
      {name: 'Entrega gratis', quantity:0},
      {name: 'Entrega gratis', quantity:0},
      {name: 'Entrega gratis', quantity:0},
      {name: 'Entrega gratis', quantity:0}];
  }

}

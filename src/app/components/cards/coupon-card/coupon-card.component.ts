import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.scss'],
})
export class CouponCardComponent implements OnInit {


  @Input() couponTypeName: string;
  @Input() quantityCoupons: string;

  constructor() { }

  ngOnInit() {}

}

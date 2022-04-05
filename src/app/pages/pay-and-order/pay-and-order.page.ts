import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pay-and-order',
  templateUrl: './pay-and-order.page.html',
  styleUrls: ['./pay-and-order.page.scss'],
})
export class PayAndOrderPage implements OnInit {

  @ViewChild('sectionSelect') sectionSelect;

  isTimeDeliverySelected: boolean;
  isPackageSelected: boolean;

  constructor() { }

  ngOnInit() {
  }


  doFilter(){
    this.sectionSelect.open();
 }

 setProgramDelivery( time ){
   console.log(time);
   this.isTimeDeliverySelected = true;
}

setPackageChoosen( packageChoosen ){
  console.log(packageChoosen);
  this.isPackageSelected = true;
}

setCardChoosen( card ){
  console.log(card);
}

 setCouponDiscount( couponValue ){
   console.log(couponValue);
 }

 setAdressSelect( adress ){
   console.log(adress);
 }

}

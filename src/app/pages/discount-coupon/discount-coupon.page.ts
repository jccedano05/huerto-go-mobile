import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-coupon',
  templateUrl: './discount-coupon.page.html',
  styleUrls: ['./discount-coupon.page.scss'],
})
export class DiscountCouponPage implements OnInit {

  incorrectCoupon = false;
  constructor() { }

  ngOnInit() {
  }

  // ------------ Fix Here.!! --------
  //buscar en la base de datos de cupones
  isCouponExist(coupon: string){
    if(coupon === 'Majo1997'){ // ????
      return true;
    }
    return false;
  }

  onClickAgree(value){
    if(this.isCouponExist(value)){
      this.incorrectCoupon = false;
      }
    else {
      this.incorrectCoupon = true;
    }
    if(!this.incorrectCoupon){
      //What i need to do if its correct
      //console.log('se agrego el cupon correctamente');
    }
  }

}

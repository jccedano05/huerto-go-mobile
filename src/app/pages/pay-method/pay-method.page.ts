import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.page.html',
  styleUrls: ['./pay-method.page.scss'],
})
export class PayMethodPage implements OnInit {

  @ViewChild('sectionSelect') sectionSelect;

  constructor() { }

  ngOnInit() {
  }

  setCardChoosen( card ){
    console.log(card);
  }

}

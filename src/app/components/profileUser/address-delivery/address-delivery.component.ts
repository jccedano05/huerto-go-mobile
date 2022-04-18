import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-delivery',
  templateUrl: './address-delivery.component.html',
  styleUrls: ['./address-delivery.component.scss'],
})
export class AddressDeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onClickAdd(){
    console.log('add');
  }

  onClickDelete(){
    console.log('delete');
  }
}

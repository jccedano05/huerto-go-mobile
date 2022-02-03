import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
})
export class CardBodyComponent implements OnInit {

  @Input() subtitle: string;
  @Input() unit: string;
  @Input() price: number;

  isOpenDetailProduct: boolean;

  constructor() { }

  ngOnInit() {}

  onClick(){

    this.isOpenDetailProduct = !this.isOpenDetailProduct;

  }

}

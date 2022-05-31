import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
})
export class CardBodyComponent implements OnInit {

  @Input() id: string;
  @Input() subtitle: string;
  @Input() unit: string;
  @Input() price: number;
  @Input() typeCard: string;

  isOpenDetailProduct: boolean;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  onClick(){

    if(this.typeCard === 'search')
      {
        console.log(`/description-product/${this.id}`);
        this.navCtrl.navigateForward(`/description-product/${this.id}`);
      } else {
        this.isOpenDetailProduct = !this.isOpenDetailProduct;
      }

  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-delivery-order',
  templateUrl: './status-delivery-order.component.html',
  styleUrls: ['./status-delivery-order.component.scss'],
})
export class StatusDeliveryOrderComponent implements OnInit {
  @Input() statusName = 'undefined';
  @Input() status = 'notYet';

  imageUrl: string;

  colorStatusText = '#dadada';
  colorStatusProgressBar = 'white';
  numberImage: string;

  constructor() {}

  selectTypeStatus = (type: string) => {
    switch (type) {
      case 'notYet': {
        this.colorStatusText = '#dadada';
        this.colorStatusProgressBar = 'white';
        this.numberImage = '1';
        break;
      }
      case 'inProgress': {
        this.colorStatusText = '#57ae14';
        this.colorStatusProgressBar = '#57ae14';
        this.numberImage = '2';
        break;
      }
      case 'done': {
        this.colorStatusText = 'orange';
        this.colorStatusProgressBar = 'orange';
        this.numberImage = '3';
        break;
      }

      default:
        break;
    }
  };

  selectTypeImageStatus = (type: string) => {
    switch (type) {
      case 'Procesando': {
        this.imageUrl = `assets/huertoGo/ANDROID/009_Perfil/001_Mispedidos/002_Icon_Procesando${this.numberImage}.svg`;
        break;
      }
      case 'Preparando': {
        this.imageUrl = `assets/huertoGo/ANDROID/009_Perfil/001_Mispedidos/003_icon_preparando${this.numberImage}.svg`;
        break;
      }
      case 'En Camino': {
        this.imageUrl = `assets/huertoGo/ANDROID/009_Perfil/001_Mispedidos/004_icon_camino${this.numberImage}.svg`;
        break;
      }
      case 'Entregado': {
        this.imageUrl = `assets/huertoGo/ANDROID/009_Perfil/001_Mispedidos/005_Icon_Entregado${this.numberImage}.svg`;
        break;
      }

      default:
        break;
    }
  };

  ngOnInit() {
    this.selectTypeStatus(this.status);
    this.selectTypeImageStatus(this.statusName);
  }
}

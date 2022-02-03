import { Component, Input, OnInit } from '@angular/core';

interface User {
  id: number;
  first: string;
  last: string;
}
interface Estado {
  id: number;
  claveEstado: string;
  nombreEstado: string;
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage  {


}

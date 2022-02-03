import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bar',
  templateUrl: './card-bar.component.html',
  styleUrls: ['./card-bar.component.scss'],
})
export class CardBarComponent implements OnInit {

  @Input() discount: number;

  isFavorite: boolean;

  constructor() { }

  ngOnInit() {}


  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}

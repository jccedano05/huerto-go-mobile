import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { sectionList } from '../../test/list-products';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
})
export class SectionListComponent implements OnInit {


  listProducts: Product [] = sectionList;

  slidesOptions = {
    slidesPerView: 1.5,
    freeMode: true,
  };

  constructor() { }

  ngOnInit() {}




}

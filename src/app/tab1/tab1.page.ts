import { Component } from '@angular/core';
import { Department } from '../interfaces/Department';
import { departmentList } from '../test/list-sections-search';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  departmentsList: Department [] = departmentList;

  constructor() {}

}

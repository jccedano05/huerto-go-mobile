import { Component, OnInit } from '@angular/core';
import { Department } from '../interfaces/Department';
import { UserService } from '../services/user.service';
import { departmentList } from '../test/list-sections-search';
import { TestApiService } from '../services/test-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  departmentsList: Department[] = departmentList;

  constructor(private testApiService: TestApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.testApiService.testFetch();
  }
}

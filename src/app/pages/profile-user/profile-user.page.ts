import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {

  itemSelected: string;

  constructor() { }

  ngOnInit() {

    this.itemSelected = 'account';

  }

  selectOption(optionSelected: any ){
    console.log(optionSelected);
  }

}

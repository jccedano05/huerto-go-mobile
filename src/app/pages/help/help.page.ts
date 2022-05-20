import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  itemSelected: string;

  constructor() { }

  ngOnInit() {
    this.itemSelected = 'none';
  }

  selectOption(optionSelected: any ){
    console.log(optionSelected);
  }

}

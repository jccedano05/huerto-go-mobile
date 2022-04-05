import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {

  @Input() type: string;
  @Input() placeholder: string;
  @Input() labelText: string;
  @Input() required: string;
  @Output() inputValue = new EventEmitter();



  // document.getElementById('input').nodeValue;

  constructor() { }


  onKeyPress(value){
  this.inputValue.emit(value);
  }

}

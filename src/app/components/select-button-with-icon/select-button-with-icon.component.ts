import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-button-with-icon',
  templateUrl: './select-button-with-icon.component.html',
  styleUrls: ['./select-button-with-icon.component.scss'],
})
export class SelectButtonWithIconComponent implements OnInit {


  @ViewChild('sectionSelect') sectionSelect;

  @Input() initialValue: string;
  @Input() srcIcon: string;
  @Input() options: string [];
  @Input() typeButtonSelect: string;
  @Input() isGreenButtonDisabled: boolean;

  @Output() inputSelected = new EventEmitter();

  valueInput: string;

  constructor() { }

  ngOnInit() {
      this.valueInput = this.initialValue;
  }


  activateSelectInput(){
    this.sectionSelect.open();
  }

  isValueInputChange(newValue: string){
    this.valueInput = newValue;
    this.inputSelected.emit( newValue );
    this.isGreenButtonDisabled = true;

  }

  onClickDisabledButton() {
    this.valueInput = this.initialValue;
    this.isGreenButtonDisabled = false;
  }

}

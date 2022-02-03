import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-huerto-go',
  templateUrl: './button-huerto-go.component.html',
  styleUrls: ['./button-huerto-go.component.scss'],
})
export class ButtonHuertoGoComponent implements OnInit {

  @Input() color: string;
  @Input() labelInput: string;

  constructor() { }

  ngOnInit() {}

}

import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
})
export class StartPagePage implements OnInit {

  @Output() nombre = 'Juan Carlos';

  @Output() apellido = 'Cedano Velazquez';

  constructor() { }

  ngOnInit() {
  }

}

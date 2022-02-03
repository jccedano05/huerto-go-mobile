import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


interface Genders {
  id: number;
  key: string;
  name: string;
}

interface State {
  id: number;
  key: string;
  name: string;
}




@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent {



  @Input() arrayOption;
  @Input() labelText;
  @Input() required;
  @Input() placeholder;



  days: number;

  genders: Genders [] = [
    { id:1, key: 'H', name: 'Hombre' },
    { id:2,  key: 'M',  name: 'Mujer' },
  ];

  states: State [] = [
    { id:1, key: 'AGS', name: 'AGUASCALIENTES' },
    { id:2,  key: 'BC',  name: 'BAJA CALIFORNIA' },
    { id:3,  key: 'BCS', name: 'BAJA CALIFORNIA SUR' },
    { id:4,  key: 'CHI', name: 'CHIHUAHUA' },
    { id:5,  key: 'CHS', name: 'CHIAPAS' },
    { id:6,  key: 'CMP', name: 'CAMPECHE' },
    { id:7,  key: 'CMX', name: 'CIUDAD DE MEXICO' },
    { id:8,  key: 'COA', name: 'COAHUILA' },
    { id:9,  key: 'COL', name: 'COLIMA' },
    { id:10,  key: 'DGO', name: 'DURANGO' },
    { id:11,  key: 'GRO', name: 'GUERRERO' },
    { id:12,  key: 'GTO', name: 'GUANAJUATO' },
    { id:13,  key: 'HGO', name: 'HIDALGO' },
    { id:14,  key: 'JAL', name: 'JALISCO' },
    { id:15,  key: 'MCH', name: 'MICHOACAN' },
    { id:16,  key: 'MEX', name: 'ESTADO DE MEXICO' },
    { id:17,  key: 'MOR', name: 'MORELOS' },
    { id:18,  key: 'NAY', name: 'NAYARIT' },
    { id:19,  key: 'NL',  name: 'NUEVO LEON' },
    { id:10,  key: 'OAX', name: 'OAXACA' },
    { id:21,  key: 'PUE', name: 'PUEBLA' },
    { id:22,  key: 'QR',  name: 'QUINTANA ROO' },
    { id:23,  key: 'QRO', name: 'QUERETARO' },
    { id:24,  key: 'SIN', name: 'SINALOA' },
    { id:25,  key: 'SLP', name: 'SAN LUIS POTOSI' },
    { id:26,  key: 'SON', name: 'SONORA' },
    { id:27,  key: 'TAB', name: 'TABASCO' },
    { id:28,  key: 'TLX', name: 'TLAXCALA' },
    { id:29,  key: 'TMS', name: 'TAMAULIPAS' },
    { id:30,  key: 'VER', name: 'VERACRUZ' },
    { id:31,  key: 'YUC', name: 'YUCATAN' },
    { id:32,  key: 'ZAC', name: 'ZACATECAS' }
];




constructor(){}










}

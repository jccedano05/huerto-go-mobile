import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface MonthDays {
  id: number;
  name: string;
  daysOfMonth: number;
}



@Component({
  selector: 'app-input-select-reactive',
  templateUrl: './input-select-reactive.component.html',
  styleUrls: ['./input-select-reactive.component.scss'],
})
export class InputSelectReactiveComponent implements OnInit {

  @Input() arrayOption;
  @Input() labelText: string;
  @Input() required: string;
  @Output() inputValue = new EventEmitter();

  itemSelectedYear: string;
  itemSelectedMonth: string;
  itemSelectedDay: string;
  date: string;

  myFormNested: FormGroup = this.fb.group({
    daysForm: new FormControl(''),
    monthsForm: [''],
    yearForm: new FormControl(''),
  });;

  months: MonthDays[] = [
    {id:1, daysOfMonth: 31  ,name:'Enero'},
    {id:2, daysOfMonth: 28  ,name:'Febrero'},
    {id:3, daysOfMonth: 31  ,name:'Marzo'},
    {id:4, daysOfMonth: 30  ,name:'Abril'},
    {id:5, daysOfMonth: 31  ,name:'Mayo'},
    {id:6, daysOfMonth: 30  ,name:'Junio'},
    {id:7, daysOfMonth: 31  ,name:'Julio'},
    {id:8, daysOfMonth: 31  ,name:'Agosto'},
    {id:9, daysOfMonth: 30  ,name:'Septiembre'},
    {id:10, daysOfMonth: 31 ,name:'Octubre'},
    {id:11, daysOfMonth: 30 ,name:'Noviembre'},
    {id:12, daysOfMonth: 31 ,name:'Diciembre'},
  ];

  days: number;
  numberMonth: number;
  daysArray: number [];

  actualYear = new Date().getFullYear();
  years = Array(this.actualYear- (this.actualYear-150)).fill(1);
  selectedYear: number ;





  constructor( private fb: FormBuilder ) { }

  ngOnInit() {

    this.myFormNested.get('yearForm')?.valueChanges.subscribe( year => {
      this.selectedYear = year;
      if (this.numberMonth === 2) {
        if (this.selectedYear%4 === 0) {
          this.days=29;
        }
        else{
          this.days=28;
        }
        this.myFormNested.get('daysForm')?.reset('');
        this.daysArray = [];
        for (let i = 0; i < this.days; i++) {
          this.daysArray.push(i+1);
        }
      }
    });

    this.myFormNested.get('monthsForm')?.valueChanges.subscribe( id => {
      this.myFormNested.get('daysForm')?.reset('');
      this.daysArray = [];
      this.months.find( (sm, i) => {
        // eslint-disable-next-line eqeqeq
        if (sm.id == id) {
          this.days = sm.daysOfMonth;
          this.numberMonth = sm.id;
        }
      });
      if (this.numberMonth === 2 && this.selectedYear%4 === 0) {
        this.days++;
      }
      for (let i = 0; i < this.days; i++) {
        this.daysArray.push(i+1);
      }
    });
  }


  getItemYear(value){
    this.itemSelectedYear = value;
    if(this.itemSelectedYear !== undefined && this.itemSelectedMonth !== undefined &&
      (this.itemSelectedDay !== '' && this.itemSelectedDay !== undefined )){

      this.inputValue.emit(`${this.itemSelectedYear}/${this.itemSelectedMonth}/${this.itemSelectedDay}`);
    }
  }

  getItemMonth(value){
    this.itemSelectedMonth = value;
    if(this.itemSelectedYear !== undefined && this.itemSelectedMonth !== undefined &&
      (this.itemSelectedDay !== '' && this.itemSelectedDay !== undefined )){

      this.inputValue.emit(`${this.itemSelectedYear}/${this.itemSelectedMonth}/${this.itemSelectedDay}`);
  }
}

  getItemDay(value){
    this.itemSelectedDay = value;
    if(this.itemSelectedYear !== undefined && this.itemSelectedMonth !== undefined &&
                  (this.itemSelectedDay !== '' && this.itemSelectedDay !== undefined )){

      this.inputValue.emit(`${this.itemSelectedYear}/${this.itemSelectedMonth}/${this.itemSelectedDay}`);
  }
}

}

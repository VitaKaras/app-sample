import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  usrNameChanges: string;
  usrNameStatus: string;
  userForm = new FormGroup({
    name: new FormControl('Mahesh', Validators.maxLength(10)),
    age: new FormControl(20, Validators.required),
    city: new FormControl(),
    country: new FormControl()
  });
  get userName(): any {
    return this.userForm.get('name');
  }
  onFormSubmit(): void {
    console.log('Name:' + this.userForm.get('name').value);
    console.log('Age:' + this.userForm.get('age').value);
    console.log('City:' + this.userForm.get('city').value);
    console.log('Country:' + this.userForm.get('country').value);
  }
  setDefaultValue() {
    this.userForm.setValue({name: 'Mahesh', age: 20, city: '', country: ''});
  }


  words2 = [{value: 'word1'}, {value: 'word2'}, {value: 'word3'}, {value: ''}];

  add() {
    this.words2.push({value: ''});
    this.words2.push({value: ''});
  }


  price: number;
  newPrice: number;

  changeNumber() {
    this.newPrice = +this.price + 4;
  }
}

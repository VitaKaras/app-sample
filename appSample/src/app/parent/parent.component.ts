import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  template: `
    <h3>Parent</h3>
    Message: {{message}}
    <hr>
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  constructor() { }

  message:string;

 receiveMessage($event){
   this.message = $event;
 }

}

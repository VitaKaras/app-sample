import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <input id="typeahead-basic" type="text" class="form-control" [(ngModel)]="message" (change)="sendMessage()" />
    <h1> Child </h1>
    From child: {{message}}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}

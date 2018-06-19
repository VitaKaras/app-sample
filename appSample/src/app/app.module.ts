import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BaceModalComponent } from './bace-modal/bace-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    FormcontrolComponent,
    BaceModalComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbModal,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

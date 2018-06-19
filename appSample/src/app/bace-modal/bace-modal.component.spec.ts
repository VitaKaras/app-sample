import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaceModalComponent } from './bace-modal.component';

describe('BaceModalComponent', () => {
  let component: BaceModalComponent;
  let fixture: ComponentFixture<BaceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

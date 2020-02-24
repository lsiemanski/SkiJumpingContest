import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpersQueueComponent } from './jumpers-queue.component';

describe('JumpersQueueComponent', () => {
  let component: JumpersQueueComponent;
  let fixture: ComponentFixture<JumpersQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpersQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpersQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

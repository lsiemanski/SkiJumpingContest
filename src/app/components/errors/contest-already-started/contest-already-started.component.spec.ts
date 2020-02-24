import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestAlreadyStartedComponent } from './contest-already-started.component';

describe('ContestAlreadyStartedComponent', () => {
  let component: ContestAlreadyStartedComponent;
  let fixture: ComponentFixture<ContestAlreadyStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestAlreadyStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestAlreadyStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestNotStartedComponent } from './contest-not-started.component';

describe('ContestNotStartedComponent', () => {
  let component: ContestNotStartedComponent;
  let fixture: ComponentFixture<ContestNotStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestNotStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestNotStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

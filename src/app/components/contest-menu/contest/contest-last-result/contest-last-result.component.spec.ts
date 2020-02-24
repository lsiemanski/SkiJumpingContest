import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestLastResultComponent } from './contest-last-result.component';

describe('ContestLastResultComponent', () => {
  let component: ContestLastResultComponent;
  let fixture: ComponentFixture<ContestLastResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestLastResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestLastResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

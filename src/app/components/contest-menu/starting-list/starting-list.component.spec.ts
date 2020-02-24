import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingListComponent } from './starting-list.component';

describe('StartingListComponent', () => {
  let component: StartingListComponent;
  let fixture: ComponentFixture<StartingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

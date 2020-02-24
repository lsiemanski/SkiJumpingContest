import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestMenuComponent } from './contest-menu.component';

describe('ContestMenuComponent', () => {
  let component: ContestMenuComponent;
  let fixture: ComponentFixture<ContestMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

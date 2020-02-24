import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpersMenuComponent } from './jumpers-menu.component';

describe('JumpersMenuComponent', () => {
  let component: JumpersMenuComponent;
  let fixture: ComponentFixture<JumpersMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpersMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumperListComponent } from './jumper-list.component';

describe('PlayerListComponent', () => {
  let component: JumperListComponent;
  let fixture: ComponentFixture<JumperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

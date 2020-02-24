import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidSetupComponent } from './invalid-setup.component';

describe('InvalidSetupComponent', () => {
  let component: InvalidSetupComponent;
  let fixture: ComponentFixture<InvalidSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

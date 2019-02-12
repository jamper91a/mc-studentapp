import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPage } from './step.page';

describe('StepPage', () => {
  let component: StepPage;
  let fixture: ComponentFixture<StepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

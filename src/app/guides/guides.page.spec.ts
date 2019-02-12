import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesPage } from './guides.page';

describe('GuidesPage', () => {
  let component: GuidesPage;
  let fixture: ComponentFixture<GuidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetuppinPage } from './setuppin.page';

describe('SetuppinPage', () => {
  let component: SetuppinPage;
  let fixture: ComponentFixture<SetuppinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetuppinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetuppinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

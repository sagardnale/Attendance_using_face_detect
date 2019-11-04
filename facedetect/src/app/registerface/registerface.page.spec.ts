import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfacePage } from './registerface.page';

describe('RegisterfacePage', () => {
  let component: RegisterfacePage;
  let fixture: ComponentFixture<RegisterfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

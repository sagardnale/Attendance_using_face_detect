import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotverifyfacePage } from './notverifyface.page';

describe('NotverifyfacePage', () => {
  let component: NotverifyfacePage;
  let fixture: ComponentFixture<NotverifyfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotverifyfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotverifyfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

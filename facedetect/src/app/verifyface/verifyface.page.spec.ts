import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyfacePage } from './verifyface.page';

describe('VerifyfacePage', () => {
  let component: VerifyfacePage;
  let fixture: ComponentFixture<VerifyfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

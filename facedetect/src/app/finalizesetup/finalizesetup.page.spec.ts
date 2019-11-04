import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizesetupPage } from './finalizesetup.page';

describe('FinalizesetupPage', () => {
  let component: FinalizesetupPage;
  let fixture: ComponentFixture<FinalizesetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizesetupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizesetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

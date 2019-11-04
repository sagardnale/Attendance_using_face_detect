import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastfaceregisterPage } from './lastfaceregister.page';

describe('LastfaceregisterPage', () => {
  let component: LastfaceregisterPage;
  let fixture: ComponentFixture<LastfaceregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastfaceregisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastfaceregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

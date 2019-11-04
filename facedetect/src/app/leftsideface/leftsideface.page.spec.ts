import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsidefacePage } from './leftsideface.page';

describe('LeftsidefacePage', () => {
  let component: LeftsidefacePage;
  let fixture: ComponentFixture<LeftsidefacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsidefacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsidefacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

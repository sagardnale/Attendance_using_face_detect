import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsidefacePage } from './rightsideface.page';

describe('RightsidefacePage', () => {
  let component: RightsidefacePage;
  let fixture: ComponentFixture<RightsidefacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightsidefacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsidefacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

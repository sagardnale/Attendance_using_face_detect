import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontsidefacePage } from './frontsideface.page';

describe('FrontsidefacePage', () => {
  let component: FrontsidefacePage;
  let fixture: ComponentFixture<FrontsidefacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontsidefacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontsidefacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

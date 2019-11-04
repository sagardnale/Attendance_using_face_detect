import { TestBed } from '@angular/core/testing';

import { RegisterfaceService } from './registerface.service';

describe('RegisterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterfaceService = TestBed.get(RegisterfaceService);
    expect(service).toBeTruthy();
  });
});

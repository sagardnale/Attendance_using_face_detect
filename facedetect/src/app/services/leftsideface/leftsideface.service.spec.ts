import { TestBed } from '@angular/core/testing';

import { LeftsidefaceService } from './leftsideface.service';

describe('LeftsidefaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeftsidefaceService = TestBed.get(LeftsidefaceService);
    expect(service).toBeTruthy();
  });
});

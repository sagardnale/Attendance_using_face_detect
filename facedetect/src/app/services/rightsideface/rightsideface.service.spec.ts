import { TestBed } from '@angular/core/testing';

import { RightsidefaceService } from './rightsideface.service';

describe('RightsidefaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RightsidefaceService = TestBed.get(RightsidefaceService);
    expect(service).toBeTruthy();
  });
});

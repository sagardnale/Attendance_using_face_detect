import { TestBed } from '@angular/core/testing';

import { FrontsidefaceService } from './frontsideface.service';

describe('FrontsidefaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontsidefaceService = TestBed.get(FrontsidefaceService);
    expect(service).toBeTruthy();
  });
});

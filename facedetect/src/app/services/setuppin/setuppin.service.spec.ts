import { TestBed } from '@angular/core/testing';

import { SetuppinService } from './setuppin.service';

describe('SetuppinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetuppinService = TestBed.get(SetuppinService);
    expect(service).toBeTruthy();
  });
});

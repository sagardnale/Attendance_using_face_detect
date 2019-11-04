import { TestBed } from '@angular/core/testing';

import { FinalizesetupService } from './finalizesetup.service';

describe('FinalizesetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinalizesetupService = TestBed.get(FinalizesetupService);
    expect(service).toBeTruthy();
  });
});

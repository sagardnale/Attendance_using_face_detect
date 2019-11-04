import { TestBed } from '@angular/core/testing';

import { NotverifyService } from './notverify.service';

describe('NotverifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotverifyService = TestBed.get(NotverifyService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BucketsService } from './buckets.service';

describe('BucketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BucketsService = TestBed.get(BucketsService);
    expect(service).toBeTruthy();
  });
});

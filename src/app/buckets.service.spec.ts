import { TestBed } from '@angular/core/testing';
import {
  HttpClientModule
} from '@angular/common/http';

import { BucketsService } from './buckets.service';

describe('BucketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    declarations: []
  }));

  it('should be created', () => {
    const service: BucketsService = TestBed.get(BucketsService);
    expect(service).toBeTruthy();
  });
});

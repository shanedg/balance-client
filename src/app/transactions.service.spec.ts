import { TestBed } from '@angular/core/testing';
import {
  HttpClientModule
} from '@angular/common/http';

import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    declarations: []
  }));

  it('should be created', () => {
    const service: TransactionsService = TestBed.get(TransactionsService);
    expect(service).toBeTruthy();
  });
});

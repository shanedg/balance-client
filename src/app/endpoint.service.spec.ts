import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { EndpointService } from './endpoint.service';

describe('EndpointService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  it('should be created', () => {
    const service: EndpointService = TestBed.get(EndpointService);
    expect(service).toBeTruthy();
  });
});

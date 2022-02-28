import { TestBed } from '@angular/core/testing';

import { ResultSummaryServiceService } from './result-summary-service.service';

describe('ResultSummaryServiceService', () => {
  let service: ResultSummaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultSummaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

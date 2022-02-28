import { TestBed } from '@angular/core/testing';

import { LoadQuestionsServiceService } from './load-questions-service.service';

describe('LoadQuestionsServiceService', () => {
  let service: LoadQuestionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadQuestionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

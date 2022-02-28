import { TestBed } from '@angular/core/testing';

import { LoadResolutionsServiceService } from './load-resolutions-service.service';

describe('LoadResolutionsServiceService', () => {
  let service: LoadResolutionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadResolutionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

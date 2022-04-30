import { TestBed } from '@angular/core/testing';

import { LoadResolutionsService } from './load-resolutions.service';

describe('LoadResolutionsService', () => {
  let service: LoadResolutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadResolutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetnavitemsService } from './getnavitems.service';

describe('GetnavitemsService', () => {
  let service: GetnavitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetnavitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

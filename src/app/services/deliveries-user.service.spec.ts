import { TestBed } from '@angular/core/testing';

import { DeliveriesUserService } from './deliveries-user.service';

describe('DeliveriesUserService', () => {
  let service: DeliveriesUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveriesUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

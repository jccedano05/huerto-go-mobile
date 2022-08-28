import { TestBed } from '@angular/core/testing';

import { ActualCartService } from './actual-cart.service';

describe('ActualCartService', () => {
  let service: ActualCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

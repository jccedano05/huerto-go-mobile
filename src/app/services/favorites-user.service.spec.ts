import { TestBed } from '@angular/core/testing';

import { FavoritesUserService } from './favorites-user.service';

describe('FavoritesUserService', () => {
  let service: FavoritesUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

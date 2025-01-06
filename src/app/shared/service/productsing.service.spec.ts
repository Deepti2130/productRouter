import { TestBed } from '@angular/core/testing';

import { ProductsingService } from './productsing.service';

describe('ProductsingService', () => {
  let service: ProductsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

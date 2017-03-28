import { TestBed, inject } from '@angular/core/testing';

import { HipsterIpsumService } from './hipster-ipsum.service';

describe('HipsterIpsumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HipsterIpsumService]
    });
  });

  it('should ...', inject([HipsterIpsumService], (service: HipsterIpsumService) => {
    expect(service).toBeTruthy();
  }));
});

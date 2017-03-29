import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HipsterIpsumService } from './hipster-ipsum.service';

describe('HipsterIpsumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HipsterIpsumService],
      imports: [HttpModule]
    });
  });

  it('should be truthy', inject([HipsterIpsumService], (service: HipsterIpsumService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { YourwebsitesService } from './yourwebsites.service';

describe('YourwebsitesService', () => {
  let service: YourwebsitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourwebsitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

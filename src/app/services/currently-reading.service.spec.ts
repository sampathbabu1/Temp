import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CurrentlyReadingService } from './currently-reading.service';

describe('CurrentlyReadingService', () => {
  let service: CurrentlyReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(CurrentlyReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

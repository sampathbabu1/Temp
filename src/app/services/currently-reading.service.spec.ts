import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CurrentlyReadingService } from './currently-reading.service';

describe('CurrentlyReadingService', () => {
  let service: CurrentlyReadingService;
  let listOfBooks:Array<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(CurrentlyReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Reading from DB",()=>{
    service.sendBooks().subscribe((value)=>{
      listOfBooks=value;
      console.log("length"+listOfBooks)
      expect(listOfBooks.length).toBeGreaterThan(0)
    })
    
  })
});

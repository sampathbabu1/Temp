import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CurrentlyReadingService } from 'src/app/services/currently-reading.service';

@Component({
  selector: 'app-currently-reading',
  templateUrl: './currently-reading.component.html',
  styleUrls: ['./currently-reading.component.css'],
})
export class CurrentlyReadingComponent implements OnInit {
  public display: number[] = [];
  constructor(
    private _displayCurrentlyReading: CurrentlyReadingService,
    private cdr: ChangeDetectorRef
  ) {
    _displayCurrentlyReading.booksReading.subscribe((values) => {
      this.display.push(values)
      console.log(values);
      console.log(this.display);
      this.cdr.detectChanges();
    });
  }
  input(x: KeyboardEvent) {
    console.log(this.testArray)
    this.testArray.push(x.key)
    this.cdr.detectChanges()
  }
  public testArray: string[] = ["a","b","c","d","e"];
  ngOnInit(): void {}
}

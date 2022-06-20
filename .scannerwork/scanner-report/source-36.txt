import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/Books';
import { CurrentlyReadingService } from 'src/app/services/currently-reading.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  readbook(id: number) {
    if(this.buttonText[id-1]=="Read Book"){
      this.buttonText[id-1]="Continue Reading"
      return
    }
    this.readingBooks.push(id);
    this._currentReading.currentlyReading(id);
  }
  changeSlider(id:number,value:number|null){
    console.log(id)
    console.log(value)
    this.percent[id]=value;
  }

  public percent:number[]|null[]=[50,20,30,60];
  public listOfBooks: Books[] = [];
  constructor(private _currentReading: CurrentlyReadingService) {}
  private readingBooks: number[] = [];
  public buttonText: string[] = [];

  ngOnInit(): void {
    this._currentReading.sendBooks().subscribe((value) => {
      this.listOfBooks = value;
      console.log(this.listOfBooks.length);
      this.buttonText = Array(this.listOfBooks.length).fill('Read Book');
    });
    console.log(this.buttonText);
  }
}

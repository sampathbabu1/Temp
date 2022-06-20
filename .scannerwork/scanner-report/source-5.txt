import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Books } from '../Books';
@Injectable({
  providedIn: 'root',
})
export class CurrentlyReadingService {
  booksSource = new Subject<number>();
  booksReading = this.booksSource.asObservable();
  private booksAPIURL = 'http://localhost:3000/books';
  sendBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.booksAPIURL);
  }
  currentlyReading(id: number) {
    this.booksSource.next(id);
  }
  constructor(private http: HttpClient) {}
}

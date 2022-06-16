import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { TasksComponent } from './components/tasks/tasks.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BookComponent } from './components/book/book.component';
import { CurrentlyReadingComponent } from './components/currently-reading/currently-reading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ButtonComponent,
    TaskItemComponent,
    BookComponent,
    CurrentlyReadingComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

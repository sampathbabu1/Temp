import { Component } from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temp(event:MatSliderChange){
    console.log(event)
    this.percent=event.value;
  }
  public percent:number|null=50;
  title = 'demo-angular';
}

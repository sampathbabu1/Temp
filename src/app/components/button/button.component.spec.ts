import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let debugElement: DebugElement;
  let button: ElementRef;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.onClick = () => {
      console.log('hello!!!!!!!!!!!!!!!!!!!!!');
    };
    debugElement = fixture.debugElement;
    button = debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Button clikc!', () => {
    let tempFun = () => {
      console.log('HELEEL');
    };
    // component.btnClick=new EventEmitter();
    button.nativeElement.click();
    component.onClick();
    console.log(component);
    // expect(component.btnClick.emit).toHaveBeenCalled();
  });
});

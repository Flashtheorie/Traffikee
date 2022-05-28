import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  animations: [ 
    trigger('opacityTranslateY', [
      transition(':enter', [
        style({ transform: 'translateY(0.5rem)', opacity: 0 }),
        animate('300ms ease-out', style({  transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('100ms ease-in', style({ transform: 'translateY(0.5rem)', opacity: 0 }))
      ])
    ])
  ]
})
export class ErrorComponent {
  error = {
    title : 'Incorrect credentials',
    message : 'This password do not match your credentials'
  }

  isNotification = true;
  
  close(){
    this.isNotification = false
  }
}
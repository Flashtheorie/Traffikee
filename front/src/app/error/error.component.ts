import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { LoginComponent } from '../login/login.component';
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
  @Input() ErrorTitle: string;
  @Input() ErrorMessage: string;

  isNotification = true;
  
  close(){
    this.isNotification = false
  }
}
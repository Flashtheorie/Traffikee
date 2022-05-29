import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  animations: [ 
    trigger('opacity', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('opacityTranslateY', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(1rem)' }),
        animate('300ms ease-out', style({  opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(1rem)' }))
      ])
    ])
  ]
})
export class ProfilComponent  {

  isModal = false;

  
  
  toggleModal(){
    this.isModal = !this.isModal;
  }


  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }
  rewindHistory(){
    window.history.back();
  }

  url = 'http://localhost:3001/users/' + sessionStorage.getItem('id');
  urldelete = 'http://localhost:3001/delete/' + sessionStorage.getItem('id');
  users = [];


  delete(){
    this.http.get(this.urldelete).toPromise().then((data: any) => {
      sessionStorage.clear();

   
     
    })
  }

 constructor(private http: HttpClient){
  this.http.get(this.url).toPromise().then((data: any) => {
  this.users = data
  })

 

}
}

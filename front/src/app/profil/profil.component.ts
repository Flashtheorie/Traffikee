import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent  {
  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }


  url = 'http://localhost:3001/users/' + sessionStorage.getItem('id');
  user = [];


 constructor(private http: HttpClient){
  this.http.get(this.url).toPromise().then((data: any) => {
  this.user = data
  })

 

}
}

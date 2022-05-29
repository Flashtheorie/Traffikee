import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbaronline',
  templateUrl: './navbaronline.component.html',
  styleUrls: ['./navbaronline.component.css']
})
export class NavbaronlineComponent  {
  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }
  logout(){
    sessionStorage.clear();

  }


  url = 'http://localhost:3001/users/' + sessionStorage.getItem('id');
  users = [];


 constructor(private http: HttpClient){
  this.http.get(this.url).toPromise().then((data: any) => {
  this.users = data
  })

 

}
}

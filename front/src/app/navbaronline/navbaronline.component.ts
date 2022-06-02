import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
    this.cookieService.set('id', '', -1);

  }


  url = 'https://traffikee.com/api/users/' + sessionStorage.getItem('id');
  users = [];


 constructor(private http: HttpClient,
  private cookieService: CookieService){
  this.http.get(this.url).toPromise().then((data: any) => {
  this.users = data
  })

 

}
}

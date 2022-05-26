import { Component, OnInit } from '@angular/core';
import { YourwebsitesService } from '../yourwebsites.service';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../user-data.service'


@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})

export class WebsitesComponent implements OnInit {
  input: any = {
    url: "",
    id: sessionStorage.getItem('id')
};

website: any = {
  url: "",
  id: ""
};







  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }

  url = 'http://localhost:3001/users/' + sessionStorage.getItem('id');
  
  user: any[] = [];
  
  headers = ["rank","url", "points", "allocate points", "modify"];
  ItemsArray: any[] = [];
  
  
  delete(id){
    this.http.get('http://localhost:3001/deletewebsite/' + id)
     .subscribe(result => {});
     window.location.reload();
  }
  
addpoints(id, amount){
  this.http.get('http://localhost:3001/addpoints/' + id + '/' + amount + '/' + sessionStorage.getItem('id'))
     .subscribe(result => {});
     window.location.reload();
}




constructor(private yourwebsites: YourwebsitesService, 
  private http: HttpClient,
  private userData: UserDataService,
  ){
  this.http.get(this.url).toPromise().then((data: any) => {
  this.user = data
  })
}
  ngOnInit() {
    this.yourwebsites.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
      console.log(res)
    });

    this.userData.getData().subscribe((res: any[]) => {
      this.user = res;
      //console.log(res)
    });
  }
}

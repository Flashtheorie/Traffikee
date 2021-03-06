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

  url = 'https://traffikee.com/api/users/' + sessionStorage.getItem('id');
  api: string = 'https://traffikee.com/api/websites/' + sessionStorage.getItem('id');
  user: any[] = [];
  
  headers = ["rank","url", "points", "allocate points", "modify"];
  ItemsArray: any[] = undefined;
  
  
  delete(id){
    this.http.get('https://traffikee.com/api/deletewebsite/' + id)
     .subscribe(result => {});
     window.location.reload();
  }
  
addpoints(id, amount){
  this.http.get('https://traffikee.com/api/addpoints/' + id + '/' + amount + '/' + sessionStorage.getItem('id'))
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
    this.http.get(this.api).subscribe((res: any[]) => {
      this.ItemsArray = res;
      //console.log(res)
    });

    this.userData.getData().subscribe((res: any[]) => {
      this.user = res;
      //console.log(res)
    });
  }
}

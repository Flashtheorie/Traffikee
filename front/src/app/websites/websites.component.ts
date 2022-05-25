import { Component, OnInit } from '@angular/core';
import { YourwebsitesService } from '../yourwebsites.service';
import { HttpClient } from '@angular/common/http';
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

  
  headers = ["url", "points", "action"];
  ItemsArray: any[] = [];
  
  delete(id){
    this.http.get('http://localhost:3001/deletewebsite/' + id)
     .subscribe(result => {});
     window.location.reload();
  }
  
  constructor(private yourwebsites: YourwebsitesService, private http: HttpClient) {}
  ngOnInit() {
    this.yourwebsites.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
      //console.log(res)
    });
  }
}

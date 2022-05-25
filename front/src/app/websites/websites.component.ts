import { Component, OnInit } from '@angular/core';
import { YourwebsitesService } from '../yourwebsites.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {

  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }

  
  headers = ["url", "points", "action"];
  ItemsArray: any[] = [];
  
  constructor(private yourwebsites: YourwebsitesService) {}
  ngOnInit() {
    this.yourwebsites.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
      console.log(res)
    });
  }
}

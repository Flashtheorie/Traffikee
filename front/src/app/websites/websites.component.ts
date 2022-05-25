import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }

  constructor() { }

  ngOnInit(): void {
  }

}

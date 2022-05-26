import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { RankService } from '../rank.service';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }

  visitlink(url){
    const urlJSON = JSON.stringify(url);
    this.http.get('http://localhost:3001/visitlink/' + sessionStorage.getItem('id'))
       .subscribe(result => {});
       setTimeout(function(){
        window.location.reload();
       }, 100)
  }

  headers = ["rank","url", "points"];
  ItemsArray: any[] = [];
  
  constructor(private rankService: RankService, private http: HttpClient) {}
  ngOnInit() {
    this.rankService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
    });
  }
}
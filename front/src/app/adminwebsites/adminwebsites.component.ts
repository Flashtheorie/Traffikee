import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RankService } from '../rank.service';


@Component({
  selector: 'app-adminwebsites',
  templateUrl: './adminwebsites.component.html',
  styleUrls: ['./adminwebsites.component.css']
})
export class AdminwebsitesComponent implements OnInit {
  ItemsArray: any[] = [];
  
  delete(id){
    this.http.get('http://localhost:3001/deletewebsite/' + id)
     .subscribe(result => {});
     window.location.reload();
  }

  constructor(private rankService: RankService, private http: HttpClient) {}
  ngOnInit() {
    this.rankService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
    });
  }

}

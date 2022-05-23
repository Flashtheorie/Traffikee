import { Component, OnInit } from '@angular/core';
import { RankService } from '../rank.service';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  headers = ["url", "points"];
  ItemsArray: any[] = [];
  
  constructor(private rankService: RankService) {}
  ngOnInit() {
    this.rankService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
    });
  }
}
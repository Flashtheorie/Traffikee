import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ListusersService } from '../listusers.service'
import { RankService } from '../rank.service'
import { TransactionsService } from '../transactions.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      
    }
    
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    
    labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [ {
      data: [ 170.3, 108.75, 125, 150, 182, 217, 219, 257, 294, 317, 450, 511],
     

    } ]
  };
  public pieChartType: ChartType = 'line';
data = [];
users = [];
websites = [];
DataTransactions = [];

transactions = [];

  constructor(private listusersService: ListusersService,
              private http: HttpClient,
              private rankService: RankService,
              private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.listusersService.getData().subscribe((res: any[]) => {
      this.users = res;
    });
    this.rankService.getData().subscribe((res: any[]) => {
      this.websites = res;
    });

    this.transactionsService.getData().subscribe((res: any[]) => {
      this.DataTransactions = res;
    })

    this.http.get('http://localhost:3001/gettotaltransactions').toPromise().then((totalTransactions: any) => {
      this.transactions = totalTransactions
  }

)}}

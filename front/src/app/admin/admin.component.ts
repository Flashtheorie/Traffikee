import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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
      data: [ 170.3, 108.75, 125, 150, 182, 217, 219, 257, 294, 317, 450, 511]
    } ]
  };
  public pieChartType: ChartType = 'line';
  http: any;
  data = [];


  constructor() { }

  ngOnInit(): void {
  }

}

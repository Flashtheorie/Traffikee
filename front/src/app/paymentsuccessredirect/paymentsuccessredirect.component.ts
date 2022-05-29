import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-paymentsuccessredirect',
  templateUrl: './paymentsuccessredirect.component.html',
  styleUrls: ['./paymentsuccessredirect.component.css']
})
export class PaymentsuccessredirectComponent implements OnInit {
url: string = 'http://localhost:3001/paymentsuccessredirect/' + sessionStorage.getItem('id') + '/100';
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get(this.url).toPromise().then((data: any) => {
    }, function(){
      
    })
    this.router.navigate(['/paymentsuccess'])
  }
  
}

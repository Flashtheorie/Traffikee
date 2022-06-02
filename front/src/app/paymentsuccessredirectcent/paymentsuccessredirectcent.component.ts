import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-paymentsuccessredirectcent',
  templateUrl: './paymentsuccessredirectcent.component.html',
  styleUrls: ['./paymentsuccessredirectcent.component.css']
})
export class PaymentsuccessredirectcentComponent implements OnInit {
url: string = 'https://traffikee.com/api/paymentsuccessredirectcent/' + sessionStorage.getItem('id') + '/1000';
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

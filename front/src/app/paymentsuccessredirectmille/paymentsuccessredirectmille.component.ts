import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-paymentsuccessredirectmille',
  templateUrl: './paymentsuccessredirectmille.component.html',
  styleUrls: ['./paymentsuccessredirectmille.component.css']
})
export class PaymentsuccessredirectmilleComponent implements OnInit {
url: string = 'https://traffikee.com/api/paymentsuccessredirectmille/' + sessionStorage.getItem('id') + '/10000';
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

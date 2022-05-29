import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-paymentsuccessredirect',
  templateUrl: './paymentsuccessredirect.component.html',
  styleUrls: ['./paymentsuccessredirect.component.css']
})
export class PaymentsuccessredirectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/paymentsuccess'])
  }

}

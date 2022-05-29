import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { StripeService } from 'ngx-stripe';

@Component({
  selector: 'ngstr-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }

  
  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) {}

  checkout(priceId) {
    // Check the server.js tab to see an example implementation
    this.http.post('http://localhost:3001/create-checkout-session/', { priceId })
      .pipe(
        switchMap(session => {
          return this.stripeService.redirectToCheckout({ sessionId: session['id'] })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}

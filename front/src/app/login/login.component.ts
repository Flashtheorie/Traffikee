import { Component, Input, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  title :string = 'Incorrect credentials';
  message :string = 'This password do not match any credentials';
  cookieValue: string;
  
  input: any = {
    email: "",
    password: "",
    cookies: ""
};
 optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};

constructor(
  public http: HttpClient,
  private router: Router,
  private cookieService: CookieService
  ){


}
isError: boolean = false;
defineIsError(){
  setTimeout(() => {
    this.isError = false;
  }, 3000);
}
  login(){
    this.http.post('http://localhost:3001/login', this.input)
        .subscribe(result => {
          if (result == "error") {
            this.isError = true;
            this.defineIsError()
          }
          else if (result != "error") {
            const removeQuotes = JSON.stringify(result)
            const removed = removeQuotes.replaceAll('"', '');
            sessionStorage.setItem('id', removed)
           this.router.navigate(['home'])
           if (this.input['cookies'] == true) {
            this.cookieService.set( 'id', removed );
           }
           //console.log(this.input['cookies'])
            // To Set Cookie
          //this.cookieValue = this.cookieService.get('id'); // To Get Cookie
          }
          
          

         
         })
}
ngOnInit(){

}
}

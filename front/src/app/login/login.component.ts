import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  input: any = {
    email: "",
    password: "",
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
          }
          
          

         
         })
}

}

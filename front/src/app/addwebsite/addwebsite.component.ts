import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-addwebsite',
  templateUrl: './addwebsite.component.html',
  styleUrls: ['./addwebsite.component.css']
})
export class AddwebsiteComponent {
  title :string = "Wrong url";
  message :string = 'The url must contain "http" or "https"';


  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }
  isError: boolean = false
  defineIsError(){
    setTimeout(() => {
      this.isError = false;
    }, 3000);
  }



  input: any = {
    url: "",
    id: sessionStorage.getItem('id')
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
this.router = router;

}

login(){
   this.http.post('https://traffikee.com/api/createwebsite/' + sessionStorage.getItem('id'), this.input)
    .subscribe(result => {
      if (result == "error")
          {
            this.isError = true;
            this.defineIsError();
          }
          if (result != "error") {
            //
            console.log('pas erreur : ' + JSON.stringify(result));
          }
          this.router.navigate(['/websites'])
          
    });
    
}

}

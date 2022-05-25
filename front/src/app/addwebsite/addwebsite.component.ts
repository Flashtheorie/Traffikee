import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-addwebsite',
  templateUrl: './addwebsite.component.html',
  styleUrls: ['./addwebsite.component.css']
})
export class AddwebsiteComponent {
  getSessionInfos(){
    return sessionStorage.getItem('id'); 
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
   this.http.post('http://localhost:3001/createwebsite/' + sessionStorage.getItem('id'), this.input)
    .subscribe(result => {
      
    });
    this.router.navigate(['/websites'])
}

}

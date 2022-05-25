import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data: any;
  error: boolean | undefined;
  errorMessage: string | undefined;

  input: any = {
    email: "",
    password: "",
};

register(){
    this.http.post('http://localhost:3001/register', this.input)
        .subscribe(result => {
          const removeQuotes = JSON.stringify(result)
          const removed = removeQuotes.replaceAll('"', '');
          sessionStorage.setItem('id', removed)
        })
}


constructor(public http: HttpClient){


}
}

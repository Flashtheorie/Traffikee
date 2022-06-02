import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title :string = "You can't use this email address";
  message :string = 'This email is already in use';

  data: any;


  error: boolean | undefined;
  errorMessage: string | undefined;

  input: any = {
    email: "",
    password: "",
};

constructor(
  public http: HttpClient,
  private router: Router,
  private route:ActivatedRoute){


}
isError: boolean = false
defineIsError(){
  setTimeout(() => {
    this.isError = false;
  }, 3000);
}

register(){
    this.http.post('https://traffikee.com/api/register', this.input)
        .subscribe(result => {
          console.log( result)
          if (result == "error")
          {
            this.isError = true;
            this.defineIsError();
          }
          else{
            if (this.input.email == "" || this.input.email == ""){
              this.isError = true;
            }
            else
            {
            const removeQuotes = JSON.stringify(result)
            const removed = removeQuotes.replaceAll('"', '');
            sessionStorage.setItem('id', removed)
            this.router.navigate(['home'])              
            }

          }
          
        })
}



}

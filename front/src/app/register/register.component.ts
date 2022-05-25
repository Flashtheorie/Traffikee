import { Component, OnInit } from '@angular/core';
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

register(){
    this.http.post('http://localhost:3001/register', this.input)
        .subscribe(result => {
          const removeQuotes = JSON.stringify(result)
          const removed = removeQuotes.replaceAll('"', '');
          sessionStorage.setItem('id', removed)
          this.router.navigate(['home'])
        })
}



}

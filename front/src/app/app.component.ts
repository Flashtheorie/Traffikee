import { Component } from '@angular/core';
import { OnInit} from '@angular/core'
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  erreur = 'front';
  cookieValue: string;
  constructor(private cookieService: CookieService) { } 
  
  
  ngOnInit() {
  this.cookieValue = this.cookieService.get('id'); // To Get Cookie
  if (this.cookieValue != '') {
    console.log(this.cookieValue);
    sessionStorage.setItem('id', this.cookieValue)
  }
  }
}

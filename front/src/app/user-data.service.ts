import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

 
  private api: string = 'https://traffikee.com/api/users/' + sessionStorage.getItem('id');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }
}

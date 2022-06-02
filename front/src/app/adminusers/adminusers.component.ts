import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListusersService } from '../listusers.service';
@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  users: any[] = [];


  delete(id: string){
    this.http.get('https://traffikee.com/api/delete/' + id).toPromise().then((data: any) => {
      //sessionStorage.clear();
      window.location.reload();
   
     
    })
  }


  
  
  constructor(private listusersService: ListusersService, private http: HttpClient) {}
  ngOnInit() {
    this.listusersService.getData().subscribe((res: any[]) => {
      this.users = res;
    });
  }

}

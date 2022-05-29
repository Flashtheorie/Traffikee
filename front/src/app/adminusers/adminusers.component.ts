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
  
  constructor(private listusersService: ListusersService, private http: HttpClient) {}
  ngOnInit() {
    this.listusersService.getData().subscribe((res: any[]) => {
      this.users = res;
    });
  }

}

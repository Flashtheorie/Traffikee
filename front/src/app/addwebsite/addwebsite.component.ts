import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addwebsite',
  templateUrl: './addwebsite.component.html',
  styleUrls: ['./addwebsite.component.css']
})
export class AddwebsiteComponent implements OnInit {
  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }
  constructor() { }

  ngOnInit(): void {
  }

}

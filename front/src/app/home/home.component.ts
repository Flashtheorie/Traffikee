import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faq = [
    {
      question: 'What is Traffikee ?',
      answer: 'We are Venom'
    }, 
    {
      question: 'What does Trafikee do ?',
      answer: 'We poo.'
    },
    {
      question: 'What',
      answer: ''
    }
  ]
  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }
  constructor() { }

  ngOnInit(): void {
  }

}

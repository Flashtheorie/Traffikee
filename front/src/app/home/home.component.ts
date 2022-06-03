import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faq = [
    {
      question: "What is Traffikee ?",
      answer: "Traffikee is an advertising leaderboard, You add your website to the pool of websites. You can click on other websites to earn points. Those points can then be used to promote your own website. The more points your website has, the higher it will be on the leaderboard, the more traffic you'll get"
    }, 
    {
      question: 'Why use Traffikee ?',
      answer: "You can use traffikee to promote your website and get visitors."
    },
    {
      question: 'Is Traffikee free ?',
      answer: "Yes, you can use Traffikee for free, however, if you wish to make your website to rank higher, faster, you can buy points."
    }
  ]
  getSessionInfos(){
    return sessionStorage.getItem('id'); 
  }
  constructor() { }

  ngOnInit(): void {
  }

}

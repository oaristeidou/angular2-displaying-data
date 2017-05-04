import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  member: string;
  members: string[];

  constructor(){
    this.title = 'Interhyp Developers';
    this.member = 'Oddy';
    this.members = ['Odyssefs', 'Maria', 'Mareike', 'Timo', 'Mohamed'];
  }
}

import { Component } from '@angular/core';
import {Member} from './member'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  member: string;
  members: Member[];

  constructor(){
    this.title = 'Interhyp Developers';
    this.member = 'Oddy';
    // this.members = ['Odyssefs', 'Maria', 'Mareike', 'Timo', 'Mohamed'];
    this.members = [
      new Member(1, "Odyssefs"),
      new Member(2, "Maria"),
      new Member(3, "Mareike"),
      new Member(4, "Timo"),
      new Member(5, "Mohamed")
    ];
  }
}

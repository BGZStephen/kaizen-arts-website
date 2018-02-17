import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-seperator',
  templateUrl: './home-seperator.component.html',
  styleUrls: ['./home-seperator.component.scss']
})
export class HomeSeperatorComponent implements OnInit {
  @Input() options: object = {
    heading: '',
    text: '',
    color: '',
  }

  constructor() { }

  ngOnInit() {}

}

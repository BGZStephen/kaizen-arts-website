import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {

  features: Array<object>

  constructor() { }

  ngOnInit() {
    this.features = [
      {
        icon: 'fa fa-hand-rock fa-3x',
        title: 'Martial Art',
        text: `Using Martial Arts as the platform to teach more than just self defence.
               Wanting to pass on the skills to combat lifes challenges and the tools
               to achieve in the hardest arena of all… Life!`
      },
      {
        icon: 'fa fa-smile fa-3x',
        title: 'Correct Ethics',
        text: 'I\'m some feature text 1'
      },
      {
        icon: 'fa fa-comment fa-3x',
        title: 'Kaizen',
        text: 'I\'m some feature text 2'
      },
      {
        icon: 'fa fa-paint-brush fa-3x',
        title: 'Art',
        text: 'I\'m some feature text 3'
      },
    ]
  }


}

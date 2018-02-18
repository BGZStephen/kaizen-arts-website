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
        text: `We focus on teaching ethics, such as respect, self restraint,
               pursuit of ongoing excellence, compassion, strength of character and self belief.`
      },
      {
        icon: 'fa fa-comment fa-3x',
        title: 'Kaizen',
        text: `There are other resources and lessons for outside of the Dojo,
               which you can tap into and use while at home.`
      },
      {
        icon: 'fa fa-paint-brush fa-3x',
        title: 'Art',
        text: `This is an art-form, while science is involved,
               so is the mystery of life and the courage required to dare to strive for ones potential.`
      },
    ]
  }


}

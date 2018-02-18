import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss']
})
export class HomeFeatureComponent implements OnInit {
  @Input() feature: object;

  constructor() { }

  ngOnInit() {
  }

}

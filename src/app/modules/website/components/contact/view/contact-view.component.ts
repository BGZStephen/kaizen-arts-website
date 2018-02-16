import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {

  mapHeight: string  = '350px';
  mapWidth: string = '100%';

  constructor() { }

  ngOnInit() {
    this.setMapHeight();
  }

  onResize() {
    this.setMapHeight();
  }

  setMapHeight() {
    if (screen.width > 720) {
      return this.mapHeight = '450px';
    }

    if (screen.width <= 720) {
      return this.mapHeight = '300px';
    }
  }

}

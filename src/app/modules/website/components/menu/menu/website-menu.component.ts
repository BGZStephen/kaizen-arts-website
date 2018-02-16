import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-menu',
  templateUrl: './website-menu.component.html',
  styleUrls: ['./website-menu.component.scss']
})
export class WebsiteMenuComponent implements OnInit {

  menuOpen: boolean = true;

  constructor() { }

  ngOnInit() {
    this.menuOpenCheck();
  }

  toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }

  onResize() {
    this.menuOpenCheck()
  }

  menuOpenCheck() {
    if (screen.width < 720) {
      return this.menuOpen = false;
    }

    this.menuOpen = true;
  }

  menuStyle() {
    if (this.menuOpen && screen.width <= 720) {
      return {'left': '0'}
    }

    if (!this.menuOpen && screen.width <= 720) {
      return {'left': '-100%'}
    }

    if (this.menuOpen && screen.width > 720) {
      return {'top': '0'}
    }
  }

}

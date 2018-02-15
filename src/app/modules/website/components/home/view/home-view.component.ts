import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: 'calc(100% - 50px)',
        height: 'calc(100vh - 140px)',
        thumbnails: false,
        // imageAnimation: NgxGalleryAnimation.Slide,
        imageArrows: false,
        preview: false,
        imageAutoPlay: true,
        imageAutoPlayInterval: 6000,
      },
    ];

    this.galleryImages = [
      {
        small: 'http://placehold.it/320x180',
        medium: 'http://placehold.it/640x360',
        big: 'http://placehold.it/1280x720'
      },
      {
        small: 'http://placehold.it/320x180',
        medium: 'http://placehold.it/640x360',
        big: 'http://placehold.it/1280x720'
      },
      {
        small: 'http://placehold.it/320x180',
        medium: 'http://placehold.it/640x360',
        big: 'http://placehold.it/1280x720'
      }
    ];
  }
}

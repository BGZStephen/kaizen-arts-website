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
  galleryIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: 'calc(100vh - 60px)',
        thumbnails: false,
        // imageAnimation: NgxGalleryAnimation.Slide,
        imageArrows: false,
        preview: false,
        imageAutoPlay: true,
        imageAutoPlayInterval: 10000,
        imageInfinityMove: true,
      },
    ];

    this.galleryImages = [
      {
        small: '../../../../assets/img/img-1.jpg',
        medium: '../../../../assets/img/img-1.jpg',
        big: '../../../../assets/img/img-1.jpg',
        message: 'Kaizen arts',
      },
      {
        small: '../../../../assets/img/img-2.jpg',
        medium: '../../../../assets/img/img-2.jpg',
        big: '../../../../assets/img/img-2.jpg'
      },
      {
        small: '../../../../assets/img/img-3.jpg',
        medium: '../../../../assets/img/img-3.jpg',
        big: '../../../../assets/img/img-3.jpg'
      }
    ];
  }

  onChange(change) {
    this.galleryIndex = change.index;
    console.log(change.index)
  }

  galleryMessages: Array = [
    {
      title: 'Welcome to Kaizen Arts',
      message: 'Martial arts, the kaizen way',
    },
    {
      title: 'Kaizen',
      message: 'Positive change in incremental steps',
    }
    {
      title: 'Pushing our potential',
      message: 'Dare to dream, dream to succeed',
    },
  ]
}

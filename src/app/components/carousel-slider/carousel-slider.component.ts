import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css']
})
export class CarouselSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '/assets/carousel/auto taller 01.jpg',
      thumbImage: '/assets/carousel/auto taller 01.jpg',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: '/assets/carousel/auto taller 02.webp',
      thumbImage: '/assets/carousel/auto taller 02.webp',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '/assets/carousel/auto taller 03.webp',
      thumbImage: '/assets/carousel/auto taller 03.webp',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '/assets/carousel/auto taller 04.webp',
      thumbImage: '/assets/carousel/auto taller 04.webp',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '/assets/carousel/auto taller 05.jpg',
      thumbImage: '/assets/carousel/auto taller 05.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '/assets/carousel/auto taller 06.jpg',
      thumbImage: '/assets/carousel/auto taller 06.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    } 
  ];

}


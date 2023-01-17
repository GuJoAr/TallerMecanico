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
    }, {
      image: '/assets/carousel/auto taller 02.webp',
      thumbImage: '/assets/carousel/auto taller 02.webp',      
    }, {
      image: '/assets/carousel/auto taller 03.webp',
      thumbImage: '/assets/carousel/auto taller 03.webp',      
    }, {
      image: '/assets/carousel/auto taller 04.webp',
      thumbImage: '/assets/carousel/auto taller 04.webp',      
    }, {
      image: '/assets/carousel/auto taller 05.jpg',
      thumbImage: '/assets/carousel/auto taller 05.jpg',      
    }, {
      image: '/assets/carousel/auto taller 06.jpg',
      thumbImage: '/assets/carousel/auto taller 06.jpg',
    } 
  ];

}


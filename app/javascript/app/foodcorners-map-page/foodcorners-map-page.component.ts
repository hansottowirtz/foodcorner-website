import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foodcorners-map-page',
  template: require('./foodcorners-map-page.component.html'),
  styles: [require('./foodcorners-map-page.component.css')]
})
export class FoodcornersMapPageComponent implements OnInit {
  selectedFoodcorner: any;

  constructor() { }

  ngOnInit() {
  }

  setFoodcorner(foodcorner: any) {
    this.selectedFoodcorner = foodcorner;
  }
}

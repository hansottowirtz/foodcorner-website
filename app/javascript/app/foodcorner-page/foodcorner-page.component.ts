import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foodcorner-page',
  template: require('./foodcorner-page.component.html'),
  styles: [require('./foodcorner-page.component.css')]
})
export class FoodcornerPageComponent implements OnInit {
  orderId = '1d53j2'

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: require('./header.component.html'),
  styles: [require('./header.component.css')]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

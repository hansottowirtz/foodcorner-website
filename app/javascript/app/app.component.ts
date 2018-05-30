import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent implements OnInit {
  ngOnInit() {

  }
}

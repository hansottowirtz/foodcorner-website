import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as QRious from "qrious";

@Component({
  selector: 'order-tracking-page',
  template: require('./order-tracking-page.component.html'),
  styles: [require('./order-tracking-page.component.css')]
})
export class OrderTrackingPageComponent implements OnInit {
  done = false;
  orderId = (function makeid() {
    var text = "";
    var possible = "abcdef0123456789";
  
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  })();
  
  @ViewChild('qr', {read: ElementRef}) qr: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  setQR(data: string) {
    this.done = true;
    new QRious({
      element: this.qr.nativeElement,
      value: data,
      size: 200,
    });
  }
}

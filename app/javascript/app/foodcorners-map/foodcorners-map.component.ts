import { Component, OnInit, ElementRef, NgZone, Output, EventEmitter } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';

@Component({
  selector: 'foodcorners-map',
  template: require('./foodcorners-map.component.html'),
  styles: [require('./foodcorners-map.component.css')]
})
export class FoodcornersMapComponent implements OnInit {
  @Output()
  selectedFoodcorner: EventEmitter<any> = new EventEmitter<any>();

  constructor(private elementRef: ElementRef, private zone: NgZone) { }

  ngOnInit() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiaGFuc290dG93aXJ0eiIsImEiOiJjajlsN3AwMno0MmVnMzJvcmx5b2Z1ajdhIn0.VAoCoEbwAPYaT9StemNWYQ';
    const map = new mapboxgl.Map({
      container: this.elementRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    map.setZoom(14);
    map.setCenter([4.413080035121084, 51.175866522806984]);
    (window as any).map = map;

    const marker = new mapboxgl.Marker()
      .setLngLat([4.413080035121084, 51.175866522806984])
      .addTo(map);

    map.on('click', (e) => {
      this.zone.run(() => {
        this.selectedFoodcorner.emit({
          name: 'Campus Groenenborger'
        });
      });
    });
  }

}

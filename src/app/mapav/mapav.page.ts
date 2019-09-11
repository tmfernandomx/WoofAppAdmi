import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl:any;
@Component({
  selector: 'app-mapav',
  templateUrl: './mapav.page.html',
  styleUrls: ['./mapav.page.scss'],
})
export class MapavPage implements OnInit, AfterViewInit {
  
 
  geo=19.148898;
  geo1=-96.968945;
lat: number;
lng:number;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.geo, this.geo1);
  
  }
 ngAfterViewInit(){
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zbWFudWVsIiwiYSI6ImNqenNocDJ3NjAxZmYzY24yN2JhbTd5NmMifQ.xvhy0-l6W2XEWiGq8U-daw';





  
  const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 13,
center: [this.geo1, this.geo]
});
 
    map.on('load', () => {

      map.resize();

      new mapboxgl.Marker()
        .setLngLat([this.geo1, this.geo])//lng es geo1 y latitud geo
        .addTo(map);

      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
       
      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
      }
      }
       
      
      });
 }
}
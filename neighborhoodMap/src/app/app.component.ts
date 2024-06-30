import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'neighborhoodMap';

  ngOnInit(): void {
    let map: google.maps.Map | null = null;
    let loader = new Loader({
      apiKey: '',
      version: 'weekly'
    });
    const center = {
      lat: 57.995498561052,
      lng: 56.15747333711451
    };

    loader.load().then(() => {
      // map object with coordinates
      map = new google.maps.Map(document.getElementById('map')!, {
        center: center,
        zoom: 17
      });
    }).catch(e => {
      console.error("Error loading Google Maps: ", e);
    });

    async function addMarker() {
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      const marker = new AdvancedMarkerElement({
        map: map,
        position: center,
        title: 'Uluru'
      });
    }
    addMarker();
  }
}

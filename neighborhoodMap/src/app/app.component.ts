import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'neighborhoodMap';

  ngOnInit(): void {
   
    let loader = new Loader({
      apiKey: '***'
    })
    loader.load().then (()=>{
      const map = new google.maps.Map(document.getElementById('map')!,{
        center: {
          lat: 57.995498561052,
          lng: 56.15747333711451
        },
        zoom: 17
      })
    })

    
  }
}

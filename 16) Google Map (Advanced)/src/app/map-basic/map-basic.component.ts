import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

//need to install following library
//npm i @angular/google-maps@16.2.14
//Import "GoogleMapsModule" in app.module.ts
//some code is also required in index.html page with map api key

//also need to enable the following API service for Directions, searching, distance, travel time, trafic
//Places API, Directions API, Distance Matrix API

@Component({
  selector: 'app-map-basic',
  templateUrl: './map-basic.component.html',
  styleUrls: ['./map-basic.component.scss']
})
export class MapBasicComponent {

  showMap = false;
  isLoading = false;
  mapApiKey = environment.mapApiKey;

  initialPosition = { lat: 31.46534379999999, lng: 74.2745541 };
  zoom = 16;

  markers = [
    {
      'center':{ lat: 31.462427002007296, lng: 74.27625504373775 },
      'title': 'Bundu Khan',
    },
    {
      'center':{ lat: 31.465665924375, lng: 74.2777469974204 },
      'title': 'Ahmed chowk',
    },
    {
      'center':{ lat: 31.463792689469177, lng: 74.27433729171753 },
      'title': 'Jalal Sons',
    }
  ]


  ngOnInit() {
    this.loadGoogleMapsScript();
  }

  onMarkerClick(latLong:any) {
    console.log('Marker clicked at', latLong);
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      var clickedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      console.log('Latitude:', clickedLocation.lat, 'Longitude:', clickedLocation.lng);
    }
  }

  loadGoogleMapsScript() {
    if (!document.querySelector(`#google-maps-script`)) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtvYamhQSMdwkemW1d-KSsmKJRgzh4GIw&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => this.autoCompleteSearch(); // Initialize after script loads
      document.head.appendChild(script);
    } else {
      this.autoCompleteSearch(); // If already loaded
    }
  }

  private autoCompleteSearch()
  {
    this.showMap = true;

    const input = document.getElementById('search-input') as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      this.isLoading = false;
    });

    // Add a listener for when a user selects a location from the search results
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        // Update the map center and zoom based on the selected place
        this.initialPosition = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        this.zoom = 15; // Zoom in for a closer view of the selected place
      }
    });

  }

  onInputChange()
  {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  // onSearch() {
  //   const input = document.getElementById('search-input') as HTMLInputElement;
  //   const searchValue = input.value;

  //   if (searchValue && !this.autocomplete.getPlace()) {
  //     const service = new google.maps.places.PlacesService(document.createElement('div'));
  //     service.textSearch({ query: searchValue }, (results, status) => {
  //       if (status === google.maps.places.PlacesServiceStatus.OK && results[0].geometry) {
  //         this.initialPosition = {
  //           lat: results[0].geometry.location.lat(),
  //           lng: results[0].geometry.location.lng()
  //         };
  //         this.zoom = 15; // Zoom in on the searched place
  //         this.addMarker(this.initialPosition, results[0].name);
  //       } else {
  //         console.error('Place not found');
  //       }
  //     });
  //   }
  // }
}

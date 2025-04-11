import { Component } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dynamic-direction',
  templateUrl: './dynamic-direction.component.html',
  styleUrls: ['./dynamic-direction.component.scss']
})
export class DynamicDirectionComponent {

  isLoading = false;
  mapApiKey = environment.mapApiKey;

  // map!: google.maps.Map;
  // directionsService!: google.maps.DirectionsService;
  // directionsRenderer!: google.maps.DirectionsRenderer;
  // distanceService!: google.maps.DistanceMatrixService;
  // trafficLayer!: google.maps.TrafficLayer;

  // currentPosition: google.maps.LatLngLiteral = { lat: 31.5203696, lng: 74.35874729999999 };
  // startPosition!: google.maps.LatLngLiteral;
  // endPosition!: google.maps.LatLngLiteral;

  map!: any;
  directionsService!: any;
  directionsRenderer!: any;
  distanceService!: any;
  trafficLayer!: any;

  currentPosition = { lat: 31.5203696, lng: 74.35874729999999 };
  defaultAddress = "";
  startPosition!: any;
  endPosition!: any;

  zoom = 12;

  distanceText: string = '';
  durationText: string = '';
  showTraffic = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadGoogleMapsScript();
  }


  loadGoogleMapsScript() {
    if (!document.querySelector('#google-maps-script')) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.mapApiKey}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;

      document.head.appendChild(script);

      //need to register "initMap" in "globals.d.ts" file
      window.initMap = () => this.initializeMap();
    } else {
      this.initializeMap();
    }
  }

  getDefaultAddress() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: this.currentPosition }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        console.log(results[0].formatted_address);
        this.defaultAddress = results[0].formatted_address;
      } else {
        console.error('Geocoder failed due to:', status);
      }
    });
  }

  initializeMap() {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: this.currentPosition,
      zoom: this.zoom,
    });

    // Add a marker at the default location
    new google.maps.Marker({
      position: this.currentPosition,
      map: this.map,
      title: 'Current Location'
    });

    this.getDefaultAddress();

    // Initialize services
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.distanceService = new google.maps.DistanceMatrixService();
    this.trafficLayer = new google.maps.TrafficLayer();

    // Set up autocomplete for start and end inputs
    this.setupAutocomplete();
  }


  setupAutocomplete() {
    const startInput = document.getElementById('start-input') as HTMLInputElement;
    const endInput = document.getElementById('end-input') as HTMLInputElement;

    // Autocomplete for start position
    const startAutocomplete = new google.maps.places.Autocomplete(startInput);
    startAutocomplete.addListener('place_changed', () => {
      const place = startAutocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        this.startPosition = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
      }
    });

    // Autocomplete for end position
    const endAutocomplete = new google.maps.places.Autocomplete(endInput);
    endAutocomplete.addListener('place_changed', () => {
      const place = endAutocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        this.endPosition = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
      }
    });
  }

  onStart()
  {
    if (this.startPosition && this.endPosition) {
      this.map.setCenter(this.startPosition);
      this.map.setZoom(12);

      this.directionsRenderer.setMap(this.map);

      this.calculateAndDisplayRoute();
      this.calculateDistance();
    }
    else {
      alert("Start and Destination points are required.")
    }
  }

  calculateAndDisplayRoute() {
    const request: google.maps.DirectionsRequest = {
      origin: this.startPosition,
      destination: this.endPosition,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, (result:any, status:any) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsRenderer.setDirections(result);
      } else {
        console.error('Error fetching directions:', status);
      }
    });
  }

  calculateDistance() {
    const request: google.maps.DistanceMatrixRequest = {
      origins: [this.startPosition],
      destinations: [this.endPosition],
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.distanceService.getDistanceMatrix(request, (response:any, status:any) => {
      if (status === google.maps.DistanceMatrixStatus.OK && response && response.rows[0].elements[0].status === "OK") {
        const element = response.rows[0].elements[0];
        this.distanceText = element.distance?.text || 'Distance not available';
        this.durationText = element.duration?.text || 'Duration not available';
      } else {
        console.error('Error fetching distance:', status);
      }
    });
  }

  toggleTrafficLayer() {
    this.isLoading = true;
    this.showTraffic = !this.showTraffic;
    this.showTraffic ? this.trafficLayer.setMap(this.map) : this.trafficLayer.setMap(null);

    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      this.isLoading = false;
    });
  }


  airQuality:any;
  getAirQuality()
  {
    this.isLoading = true;
    this.apiService.getAirQuality(this.currentPosition.lat, this.currentPosition.lng).subscribe(
      (data) => {
        this.airQuality = data;
        console.log(this.airQuality);
      },
      (error) => {
        console.error('Error fetching air quality data:', error);
      }
    ).add(()=>{
      this.isLoading = false;
    });
  }

  pollenData:any;
  getPollenForecast()
  {
    this.isLoading = true;

    this.apiService.getPollenForecast(this.currentPosition.lat, this.currentPosition.lng).subscribe(
      (data) => {
        this.pollenData = data;
        console.log(this.pollenData);
      },
      (error) => {
        console.error('Error fetching pollen forecat data:', error);
      }
    ).add(()=>{
      this.isLoading = false;
    });

  }

  timezone:any;
  getTimezone()
  {
    this.isLoading = true;

    this.apiService.getTimezone(this.currentPosition.lat, this.currentPosition.lng).subscribe(
      (data) => {
        this.timezone = data;
        console.log(this.timezone);
      },
      (error) => {
        console.error('Error fetching time zone data:', error);
      }
    ).add(()=>{
      this.isLoading = false;
    });

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-map-dir',
  templateUrl: './map-dir.component.html',
  styleUrls: ['./map-dir.component.scss']
})
export class MapDirComponent {
  map!: google.maps.Map;
  directionsService!: google.maps.DirectionsService;
  directionsRenderer!: google.maps.DirectionsRenderer;
  distanceService!: google.maps.DistanceMatrixService;
  trafficLayer!: google.maps.TrafficLayer;
  showTraffic = true;

  startPosition: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  endPosition: google.maps.LatLngLiteral = { lat: 34.0522, lng: -118.2437 };
  zoom = 6;
  distanceText: string = '';
  durationText: string = '';

  ngOnInit(): void {
    this.loadGoogleMapsScript();
  }

  loadGoogleMapsScript() {
    if (!document.querySelector('#google-maps-script')) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtvYamhQSMdwkemW1d-KSsmKJRgzh4GIw&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;

      document.head.appendChild(script);

      (window as any).initMap = () => this.initializeMap();
    } else {
      this.initializeMap(); // If script already exists, initialize directly
    }
  }

  initializeMap() {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: this.startPosition,
      zoom: this.zoom,
    });

    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.distanceService = new google.maps.DistanceMatrixService();
    this.trafficLayer = new google.maps.TrafficLayer();

    // Add traffic layer to map
    if (this.showTraffic) {
      this.trafficLayer.setMap(this.map);
    }

    this.directionsRenderer.setMap(this.map);

    // Place markers for start and end points
    new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
      title: 'Start Position'
    });

    new google.maps.Marker({
      position: this.endPosition,
      map: this.map,
      title: 'End Position'
    });

    this.calculateAndDisplayRoute();
    this.calculateDistance();
  }

  toggleTrafficLayer() {
    this.showTraffic = !this.showTraffic;
    this.showTraffic ? this.trafficLayer.setMap(this.map) : this.trafficLayer.setMap(null);
  }

  calculateAndDisplayRoute() {
    const request: google.maps.DirectionsRequest = {
      origin: this.startPosition,
      destination: this.endPosition,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, (result, status) => {
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

    this.distanceService.getDistanceMatrix(request, (response, status) => {
      if (status === google.maps.DistanceMatrixStatus.OK && response && response.rows[0].elements[0].status === "OK") {
        const element = response.rows[0].elements[0];
        this.distanceText = element.distance?.text || 'Distance not available';
        this.durationText = element.duration?.text || 'Duration not available';

        console.log('Distance:', this.distanceText);
        console.log('Duration:', this.durationText);
      } else {
        console.error('Error fetching distance:', status);
      }
    });
  }
}

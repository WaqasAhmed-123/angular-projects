import { Component } from '@angular/core';

@Component({
  selector: 'app-map-advanced',
  templateUrl: './map-advanced.component.html',
  styleUrls: ['./map-advanced.component.scss']
})
export class MapAdvancedComponent {
  placesService: any;
  map:any;
  marker:any;
  infoWindow:any;

  place:any;

  async ngOnInit() {
    this.loadGoogleMapsScript();
  }

  async loadGoogleMapsScript() {
    if (!document.querySelector('#google-maps-script')) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtvYamhQSMdwkemW1d-KSsmKJRgzh4GIw&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;

      document.head.appendChild(script);

      (window as any).initMap = () => {
        this.initializeMap(); // Call initializeMap without await
      };

    } else {
      await this.initializeMap(); // If script already exists, initialize directly
    }
  }


  async initializeMap(): Promise<void>
  {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    this.map = new Map(document.getElementById('map') as HTMLElement, {
        center: {lat: 31.465499344950054, lng: 74.27455409562045},
        zoom: 14,
        mapId: '4504f8b37365c3d0',
    });

    this.placesService = new google.maps.places.PlacesService(this.map);

    this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        this.getPlaceId(event.latLng);
      }
    });

    const contentString = `<div><h3>Info</h3><b>This is dummy info Screen.</b></div>`;

    this.infoWindow = new InfoWindow();
    this.infoWindow.setContent(contentString)


    this.marker = new AdvancedMarkerElement({
      map: this.map,
      position: {lat: 31.465499344950054, lng: 74.27455409562045},
      gmpDraggable: true,
      title: "This marker is draggable.",
    });

    this.infoWindow.open(this.marker.map, this.marker)

    this.marker.addListener('dragend', (event:any) => {
      const position = this.marker.position as google.maps.LatLng;
      this.infoWindow.close();
      this.infoWindow.setContent(`Lat: ${position.lat}, Lng: ${position.lng}`);
      this.infoWindow.open(this.marker.map, this.marker);
    });

    this.marker.addListener('click', (event:any) => {
      const position = this.marker.position as google.maps.LatLng;
      this.infoWindow.close();
      this.infoWindow.setContent(`Lat: ${position.lat}, Lng: ${position.lng}`);
      this.infoWindow.open(this.marker.map, this.marker);
    });
  }


  getPlaceId(location: google.maps.LatLng) {
    const request = {
      location: location,
      radius: 50,
    };

    this.placesService.nearbySearch(request, (results:any, status:any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
        const placeId = results[0].place_id;
        this.fetchPlaceDetails(placeId, location);
      } else {
        this.infoWindow.setContent('No details available for this location.');
        this.infoWindow.setPosition(location);
        this.infoWindow.open(this.map);
      }
    });
  }

  fetchPlaceDetails(placeId: string, location: google.maps.LatLng)
  {
    const request = {
      placeId: placeId,
      fields: ['name', 'photos', 'formatted_address', 'rating', 'reviews', 'url']
    };

    this.placesService.getDetails(request, (place:any, status:any) =>
    {
      if (status === google.maps.places.PlacesServiceStatus.OK && place) {
        console.log(place)

        const content = `
          <h3>${place.name}</h3>
          <p>${place.formatted_address}</p>
          <p><a href="${place.url}" target="_blank">View on Google Maps</a></p>
          ${place.photos
            ? `<img src="${place.photos[0].getUrl({ maxWidth: 300, maxHeight: 200 })}" alt="${place.name}">`
            : ''
          }`;

        this.infoWindow.setContent(content);
        this.infoWindow.setPosition(location);
        this.infoWindow.open(this.map);
      }
      else
      {
        this.infoWindow.setContent('No details available for this location.');
        this.infoWindow.setPosition(location);
        this.infoWindow.open(this.map);
      }
    });
  }

  async getPlaceinfo()
  {
    const { Place, Review } = await google.maps.importLibrary("places")  as google.maps.PlacesLibrary;

    const place = new Place({
      id: "ChIJpyiwa4Zw44kRBQSGWKv4wgA",
    });

    await place.fetchFields({
      fields: ["displayName", "formattedAddress", "location", "reviews", "photos", "rating"]
    });

    if (place && place.reviews && place.reviews?.length > 0) {
      this.place = place;
      console.log(place);
    }

  }

}

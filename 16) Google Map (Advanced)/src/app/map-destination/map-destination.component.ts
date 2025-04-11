import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-map-destination',
  templateUrl: './map-destination.component.html',
  styleUrls: ['./map-destination.component.scss']
})
export class MapDestinationComponent {
  startPoint = { lat: 37.7749, lng: -122.4194 };
  originAddress = "";
  destinations = [
    { lat: 34.0522, lng: -118.2437 },
    { lat: 36.1699, lng: -115.1398 },
    { lat: 40.7128, lng: -74.0060 }
  ];

  finalResults:any[] = [];

  isloading = true;

  constructor(private cdr:ChangeDetectorRef)
  {}

  async ngOnInit() {
    await this.loadGoogleMapsScript();
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
        this.getDistanceAndTravelTime();
      };

    } else {
      await this.getDistanceAndTravelTime();
    }
  }

  async getDistanceAndTravelTime()
  {
    const { DistanceMatrixService } = await google.maps.importLibrary("routes") as google.maps.RoutesLibrary;

    const service = new DistanceMatrixService();

    const origins = [`${this.startPoint.lat},${this.startPoint.lng}`];
    const destinations = this.destinations.map(
      dest => `${dest.lat},${dest.lng}`
    );

    service.getDistanceMatrix(
    {
      origins,
      destinations,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response:any, status:any) =>
    {
      if (status === google.maps.DistanceMatrixStatus.OK && response) {
        const results = response.rows[0].elements;
        this.originAddress = response.originAddresses[0];

        for (let i = 0; i < results.length; i++)
        {
          var obj = {
            lat: this.destinations[i]?.lat,
            lng: this.destinations[i]?.lng,
            locationName: response.destinationAddresses[i],
            distance: results[i]?.distance?.text,
            travelTime: results[i]?.duration?.text
          }
          this.finalResults.push(obj);
        }
        this.isloading = false;
        this.cdr.detectChanges();
      } else {
        console.error('Error with Distance Matrix:', status);
      }
    }
    );
  }
}

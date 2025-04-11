import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://airquality.googleapis.com/v1/currentConditions:lookup?key='+environment.mapApiKey;
  private apiKey = environment.mapApiKey;

  constructor(private http: HttpClient) {}

  getAirQuality(lat: number, lng: number): Observable<any> {
      var body = {
        "universalAqi": false,
        "location": {
          "latitude": lat,
          "longitude": lng
        },
        "extraComputations": [
          "HEALTH_RECOMMENDATIONS",
          "DOMINANT_POLLUTANT_CONCENTRATION",
          "POLLUTANT_CONCENTRATION",
          "LOCAL_AQI",
          "POLLUTANT_ADDITIONAL_INFO"
        ],
      };

    return this.http.post(this.apiUrl, body);
  }

  getPollenForecast(lat: number, lng: number): Observable<any>
  {
    return this.http.get(`https://pollen.googleapis.com/v1/forecast:lookup?key=${environment.mapApiKey}&location.longitude=${lng}&location.latitude=${lat}&days=1`);

  }

  getTimezone(lat: number, lng: number): Observable<any> {
    const url = ` https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1331161200&key=${environment.mapApiKey}`;

    return this.http.get(url);
  }
}

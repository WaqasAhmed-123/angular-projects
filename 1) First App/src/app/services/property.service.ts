import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../interfaces/IProperty.interface';

//can be used any where
//need to register in "app.module.ts" in "providers" array
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  //in order to use httpClient we need to register it into app.module.ts file (in imports section)
  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<IProperty[]>
  {
    //in order to work this feature we need to declare "data" folder as "assets" in angular.json
    return this.http.get<IProperty[]>('data/properties.json');
  }
}

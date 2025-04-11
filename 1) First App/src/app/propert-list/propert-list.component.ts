import { Component, OnInit } from '@angular/core';
import { PropertyService } from './../services/property.service';
import { IProperty } from '../interfaces/IProperty.interface';

@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {

  //in order to work the following code need to set "strictPropertyInitialization" false
  //property found tsconfig.json file under "compilerOptions" object
  properties: Array<IProperty>;
  //or you to initialize each object like below;
  //properties: Array<IProperty> = [];

  constructor(private propertyService:PropertyService) { }

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe(
      data=>{
        this.properties = data;
      }, error=>{
        alert(error);
      }
    );
  }

}

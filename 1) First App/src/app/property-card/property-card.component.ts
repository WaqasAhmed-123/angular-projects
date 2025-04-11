import { Component, OnInit, Input } from '@angular/core';
import { IProperty } from '../interfaces/IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  //to run Input needs to import Input
  @Input() property: IProperty

  constructor() { }

  ngOnInit() {
  }

}

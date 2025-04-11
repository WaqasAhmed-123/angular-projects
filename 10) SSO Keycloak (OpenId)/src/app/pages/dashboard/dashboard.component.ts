import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  claims:any;
  
  constructor() { }

  ngOnInit() {
    this.claims = JSON.parse(localStorage.getItem('claims')!);
  }
  
}

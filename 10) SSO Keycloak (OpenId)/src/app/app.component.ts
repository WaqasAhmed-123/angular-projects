import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  claims:any;

  constructor(private oauthService: OAuthService)
  {}

  ngOnInit()
  {
    this.claims = JSON.parse(localStorage.getItem('claims')!);
  }

  logout()
  {
    var config: AuthConfig = JSON.parse(localStorage.getItem('config')!);
    this.oauthService.configure(config);

    // this.oauthService.revokeTokenAndLogout({
    //   client_id: this.oauthService.clientId,
    //   returnTo: this.oauthService.redirectUri
    // }, true);

    this.oauthService.logOut();
    localStorage.removeItem('claims');
    localStorage.removeItem('config');

    window.location.href = '/login';
    // window.location.href = 'http://localhost:8080/realms/realm1/protocol/openid-connect/logout';
  }
}

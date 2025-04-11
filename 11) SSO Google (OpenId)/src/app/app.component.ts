import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { filter } from 'rxjs';

// need to install the following dependencies
// npm i angular-oauth2-oidc --save
// npm i angular-oauth2-oidc-jwks --save

//also neeed to import the following modules in app.module.ts
// HttpClientModule,
//OAuthModule.forRoot(),

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssopractice';

  userClaims:any;

  authCodeFlowConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'https://accounts.google.com',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/index.html',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: 'client_id',

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    responseType: 'code',

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: 'openid profile email offline_access api',

    showDebugInformation: true,
  };

  authCodeFlowConfig2: AuthConfig = {
    issuer: 'https://accounts.google.com',

    redirectUri: window.location.origin,

    clientId: 'client_id',
    requireHttps:false,
    responseType: 'code',
    scope: 'openid profile email offline_access',
    disableAtHashCheck: true,
    useSilentRefresh: false,
    showDebugInformation: true,
  };

  claims:any;

  // constructor(private oauthService: OAuthService) { }
  constructor(private oauthService: OAuthService, private params: ActivatedRoute) {



}

  ngOnInit(): void {
    this.configureSingleSignOn();
    const userClaims = this.oauthService.getIdentityClaims();
    console.log(userClaims);

    console.log(this.params.snapshot.queryParamMap.get('iss'));
  }

  configureSingleSignOn()
  {
    this.oauthService.configure(this.authCodeFlowConfig2);
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }


  login()
  {
    // this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.initCodeFlow();
  }

  logout()
  {
    this.oauthService.logOut();
  }

  get token()
  {
    this.claims = this.oauthService.getIdentityClaims();
    if(this.claims)
    {
      console.log(this.claims);
      alert("Token received");
    }
    return this.claims ? this.claims: null;
  }

}

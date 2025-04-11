import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-sso-login',
  templateUrl: './sso-login.component.html',
  styleUrls: ['./sso-login.component.scss']
})
export class SsoLoginComponent 
{
  
  zuptuClient: AuthConfig = {
    issuer: 'http://localhost:8080/realms/realm1',
    redirectUri: window.location.origin+'/postlogin',
    clientId: 'zymah_client',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
    // logoutUrl: 'http://localhost:8080/realms/realm1/protocol/openid-connect/logout',
    // postLogoutRedirectUri: 'http://localhost:4200/',
    // redirectUriAsPostLogoutRedirectUriFallback: true
  };


  zymahClient: AuthConfig = {
    issuer: 'http://localhost:8080/realms/realma',
    redirectUri: window.location.origin+'/postlogin',
    clientId: 'zymah',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
    // logoutUrl: 'http://localhost:8080/realms/realma/protocol/openid-connect/logout',
    // postLogoutRedirectUri: 'http://localhost:4200/',
    // redirectUriAsPostLogoutRedirectUriFallback: true
  };

  domain?:string;

  private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  constructor(private params: ActivatedRoute, private oauthService: OAuthService)
  {}

  public async runInitialLoginSequence(): Promise<void> 
  {
    try 
    {
       await this.oauthService.loadDiscoveryDocument();
       await this.oauthService.tryLoginCodeFlow();
       this.isDoneLoadingSubject$.next(true);
     } 
     catch 
     {
       return this.isDoneLoadingSubject$.next(true);
     }
  }

  ngOnInit() 
  {
    this.domain = this.params.snapshot.params?.['domain'];

    if(this.domain === 'zuptu')
    {
      this.oauthService.configure(this.zuptuClient);
      localStorage.setItem('config', JSON.stringify(this.zuptuClient))
    }
    else if(this.domain === 'zymah')
    {
      this.oauthService.configure(this.zymahClient);
      localStorage.setItem('config', JSON.stringify(this.zymahClient))
    }
    else
    {
      alert("Could not found any Sub-domain.");
      window.location.href = "/login";
    }

    this.oauthService.setupAutomaticSilentRefresh();
    this.runInitialLoginSequence();
    
    this.oauthService.initCodeFlow();
  }
}

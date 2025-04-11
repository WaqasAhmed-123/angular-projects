import { Token } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, ReplaySubject, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/realms/realm1',
    redirectUri: window.location.origin+'/login',
    clientId: 'client1',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };

  
  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  constructor(
    private oauthService: OAuthService,
    private router: Router) {
      this.oauthService.configure(this.authConfig);

      this.oauthService.events
      .subscribe(_ => {
        this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
      });

      this.oauthService.setupAutomaticSilentRefresh();
   }

   public async runInitialLoginSequence(): Promise<void> {
    try {
       await this.oauthService.loadDiscoveryDocument();
       await this.oauthService.tryLoginCodeFlow();
       this.isDoneLoadingSubject$.next(true);
       // remove query params
       this.router.navigate(['']);
     } 
     catch {
       return this.isDoneLoadingSubject$.next(true);
     }
  }

}

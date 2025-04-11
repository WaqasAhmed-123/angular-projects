import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-sso-postlogin',
  templateUrl: './sso-postlogin.component.html',
  styleUrls: ['./sso-postlogin.component.scss']
})
export class SsoPostloginComponent 
{
  isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  constructor(private oauthService: OAuthService)
  {}

  ngOnInit() 
  {
    var config: AuthConfig = JSON.parse(localStorage.getItem('config')!);

    this.oauthService.configure(config);

    this.oauthService.events.subscribe(_ => 
    {
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
    });

    this.oauthService.setupAutomaticSilentRefresh();

    this.runInitialLoginSequence();
    this.isAuthenticated$.subscribe((i) =>
    {
      console.log(i);
      if(i)
      {
        const userClaims = this.oauthService.getIdentityClaims();
        localStorage.setItem('claims', JSON.stringify(userClaims));
        window.location.href = '/home';
      }
    });

  }

  async runInitialLoginSequence(): Promise<void> 
  {
    try {
       await this.oauthService.loadDiscoveryDocument();
       await this.oauthService.tryLoginCodeFlow();
       this.isDoneLoadingSubject$.next(true);
       // remove query params
       //this.router.navigate(['']);
     } 
     catch {
       return this.isDoneLoadingSubject$.next(true);
     }
  }
}

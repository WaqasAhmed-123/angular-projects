import { Component } from '@angular/core';
import { OauthServiceService, UserInfo } from './oauth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'google-oauth';

  mailSnippets: string[] = []
  userInfo?: UserInfo

  constructor(private readonly googleApi: OauthServiceService) {
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

}

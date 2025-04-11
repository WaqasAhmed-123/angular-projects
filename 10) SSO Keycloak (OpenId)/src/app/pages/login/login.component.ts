import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router)
  {
  }

  login(domain: string)
  {
    this.router.navigate(['/sso/' + domain]);
  }
}

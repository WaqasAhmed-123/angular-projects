import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  getLoggedinUser()
  {
    return this.authService.GetLoggedinUser();
  }

  onLogout()
  {
    localStorage.removeItem('loggedinUser');
    this.router.navigate(['/login']);
  }

}

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loggedinUser?: User | null ;

  constructor(private cookieService: CookieService){
    this.loggedinUser = this.getUserData();
  }

  login()
  {
    const newUser: User = {
      id: '1',
      name : 'Waqas Ahmed',
      email: 'a@gmail.com',
      token: 'ey4jdslkfj9340ur9adsfewf989dfesw8787ashcfasd',
      tokenExp: '125365874'
    };

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); 
    this.cookieService.set('loggedinUser', JSON.stringify(newUser), expirationDate);

    this.loggedinUser = this.getUserData();
  }


  logout(): void {
    this.cookieService.delete('loggedinUser');

    this.loggedinUser = null;
  }

  getUserData(): User | null {
    const userDataString = this.cookieService.get('loggedinUser');
    if (userDataString) {
      const userData: User = JSON.parse(userDataString);
      return userData;
    }
    return null;
  }

}

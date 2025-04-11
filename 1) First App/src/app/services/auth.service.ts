import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  constructor() { }

  Login(u: any)
  {
    let users =[];

    if(localStorage.getItem('Users'))
    {
      users = JSON.parse(localStorage.getItem('Users') as string);
    }

    return users.find((x: { email: any; password: any; })=> x.email===u.email && x.password === u.password);
  }

  GetLoggedinUser(): User
  {
    let u = JSON.parse(localStorage.getItem('loggedinUser') as string);

    return u as User;
  }
}

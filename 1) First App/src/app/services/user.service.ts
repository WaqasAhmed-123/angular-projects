import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  constructor(){  }

  addUser(u: User)
  {
    let users =[];

    if(localStorage.getItem('Users'))
    {
      users = JSON.parse(localStorage.getItem('Users') as string);
      users = [...users, u];
    }
    else
    {
      users = [u];
    }
    localStorage.setItem('Users', JSON.stringify(users));

  }
}

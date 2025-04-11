import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
//in order to work following line need to declare it as ".d.ts" module
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: any;
  isSubmitted: boolean;

  constructor(private authService: AuthService, private router:Router) { }

  createLogin(){
    this.loginForm = new FormGroup({
      email:new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.createLogin();
  }

  setLoginData(): any
  {
    return this.login = {
      email: this.email.value,
      password: this.password.value,
    }
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.loginForm.valid)
    {
      console.log("valid");
      const user = this.authService.Login(this.setLoginData());
      if(user)
      {
        localStorage.setItem('loggedinUser', JSON.stringify(user));
        this.createLogin();
        this.isSubmitted = false;

        this.router.navigate(['/']);
      }
      else{
        alertify.set('notifier','position', 'top-right');
        alertify.error("Invalid creds.");
      }
    }
    else
    {
      alertify.set('notifier','position', 'top-right');
      alertify.error("All fields are required.");
    }
  }

  //getter methods
  get email(){
    return this.loginForm.get('email') as FormControl;
  }
  get password(){
    return this.loginForm.get('password') as FormControl;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: any;
  isSubmitted: boolean;

  constructor(private apiService: ApiService, private router:Router, private alertify: AlertifyService) { }

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
      email: this.getEmail.value,
      password: this.getPassword.value,
    }
  }

  onSubmit()
  {
    if(this.loginForm.valid)
    {
      this.isSubmitted = true;

      this.apiService.PostRequest(this.setLoginData(), '/Auth/Login/', false).subscribe({
        next: (res)=>
        {
          if(res.status)
          {
            localStorage.setItem('loggedinUser', JSON.stringify(res.data));
            this.createLogin();

            if(res.data.role === "Admin" || res.data.role === "Manager")
            {
              // this.router.navigate(['/admin/index']);
              window.location.href = 'admin/index';
            }
            else
            {
              // this.router.navigate(['/employee/index']);
              window.location.href = 'employee/index';

            }
          }
          else{
            this.alertify.ShowError(res.message);
          }
        },
        error: (error)=>{console.log("error")},
        complete: ()=>{
          console.log("completed");
        }
      }).add(() => {
        this.isSubmitted = false;
      });

    }
    else
    {
      this.alertify.ShowError("All fields are required.");
    }
  }

  //getter methods
  get getEmail(){
    return this.loginForm.get('email') as FormControl;
  }
  get getPassword(){
    return this.loginForm.get('password') as FormControl;
  }

}

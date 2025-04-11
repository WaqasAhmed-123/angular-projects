import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSubmitted: boolean;
  isLoading: boolean;

  formGroup = new FormGroup({
    name:new FormControl(null, [Validators.required, Validators.minLength(5)]),
    contact:new FormControl(null, Validators.required),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl(null, Validators.required)
  });


  constructor(private alertify: AlertifyService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  matchPassword(): boolean
  {
    return this.getPassingObj().password === this.getPassingObj().confirmPassword;
  }

  onSubmit()
  {
    this.isSubmitted = true;

    if(this.formGroup.valid)
    {
      if(!this.matchPassword())
      {
        this.alertify.ShowError("Password and Confirm Password not match.");
        return;
      }
      this.isLoading = true;
      this.apiService.PostRequest(this.getPassingObj(), '/Auth/Register/', false).subscribe((res)=>
      {
        if(res.status)
        {
          this.formGroup.reset();
          this.router.navigate(['/login']);
        }

        this.alertify.ShowMessage(res.message, res.status);
      }).add(()=>{
        this.isSubmitted = false;
        this.isLoading = false;
      });
    }
    else
    {
      this.alertify.ShowError("All fields are required.");
    }
  }

  getPassingObj(): any
  {
    return {
      name: this.formGroup.value?.['name'],
      contact: this.formGroup.value?.['contact'],
      email: this.formGroup.value?.['email'],
      password: this.formGroup.value?.['password'],
      confirmPassword: this.formGroup.value?.['confirmPassword'],
    }
  }

}

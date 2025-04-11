import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  forgot: any;
  isSubmitted: boolean;

  constructor(private alertify: AlertifyService, private apiService: ApiService) { }

  createForgot(){
    this.forgotForm = new FormGroup({
      email:new FormControl(null, [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
    this.createForgot();
  }

  setForgotData(): any
  {
    return this.forgot =
    {
      email: this.getEmail.value,
      baseUri: 'http://localhost:4200/reset/'
    }
  }

  onSubmit()
  {
    if(this.forgotForm.valid)
    {
      this.isSubmitted = true;

      this.apiService.PostRequest(this.setForgotData(), '/Auth/ForgotPassword/', false).subscribe((res)=>
      {
        if(res.status)
          this.createForgot();
        this.alertify.ShowMessage(res.message, res.status);
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
    return this.forgotForm.get('email') as FormControl;
  }

}

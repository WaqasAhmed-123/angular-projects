import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  updPasswordForm: FormGroup;
  passwordObj: any;
  isSubmitted: boolean;

  constructor(private alertify: AlertifyService, private apiService: ApiService) { }

  createPassword(){
    this.updPasswordForm = new FormGroup({
      oldPassword:new FormControl(null, Validators.required),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl(null, Validators.required)
    }, this.matchPassword);
  }

  matchPassword(fc: AbstractControl): ValidationErrors | null {
    return fc.get('newPassword')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  ngOnInit() {
    this.createPassword();
  }

  setPasswordData(): any
  {
    return this.passwordObj = {
      id: this.apiService.GetLoggedinUser().id,
      oldPassword: this.getOldPassword.value,
      newPassword: this.getNewPassword.value,
      confirmPassword: this.getConfirmPassword.value,
    }
  }

  onSubmit()
  {
    if(this.updPasswordForm.valid)
    {
      this.isSubmitted = true;
      this.apiService.PutRequest(this.setPasswordData(), '/Auth/UpdatePassword/', true).subscribe((res)=>
      {
        if(res.status)
        {
          this.createPassword();
        }
        this.alertify.ShowMessage(res.message, res.status);
      }).add(()=>{
        this.isSubmitted = false;
      });
    }
    else
    {
      this.alertify.ShowError("All fields are required.");
    }
  }

  //getter methods
  get getOldPassword(){
    return this.updPasswordForm.get('oldPassword') as FormControl;
  }
  get getNewPassword(){
    return this.updPasswordForm.get('newPassword') as FormControl;
  }
  get getConfirmPassword(){
    return this.updPasswordForm.get('confirmPassword') as FormControl;
  }

}

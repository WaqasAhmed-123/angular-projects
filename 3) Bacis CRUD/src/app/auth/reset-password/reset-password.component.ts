import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  id: string;
  resetForm: FormGroup;
  reset: any;
  isSubmitted: boolean;

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private apiService: ApiService, private router: Router) { }

  createRegister(){
    this.resetForm = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl(null, Validators.required)
    }, this.matchPassword);
  }

  matchPassword(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  ngOnInit() {
    this.createRegister();
  }

  setResetData(): any
  {
    return this.reset = {
      id: this.route.snapshot.params['id'],//getting url parameter
      newPassword: this.getPassword.value,
      confirmPassword: this.getConfirmPassword.value
    }
  }

  onSubmit()
  {
    if(this.resetForm.valid)
    {
      this.isSubmitted = true;
      this.apiService.PostRequest(this.setResetData(), '/Auth/ResetPassword/', false).subscribe((res)=>
      {
        if(res.status)
        {
          this.createRegister();
          this.router.navigate(['/login']);
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
  get getPassword(){
    return this.resetForm.get('password') as FormControl;
  }
  get getConfirmPassword(){
    return this.resetForm.get('confirmPassword') as FormControl;
  }

}

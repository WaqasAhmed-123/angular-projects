import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
//in order to work following line need to declare it as ".d.ts" module
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  isSubmitted: boolean;

  constructor(private fg: FormBuilder, private userService: UserService) { }

  createUser(){
    this.registerationForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email:new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl('+92', Validators.required)
    }, this.matchPassword);
  }

  matchPassword(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  ngOnInit()
  {
    this.createUser();
  }

  setUserData(): User
  {
    return this.user = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      mobile:this.mobile.value,
    }
  }

  onSubmit(){
    console.log(this.registerationForm);
    this.isSubmitted = true;
    if(this.registerationForm.valid)
    {
      //can be used when object type is set as any
      // this.user = Object.assign(this.user, this.registerationForm.value);
      // this.userService.addUser(this.user);

      this.userService.addUser(this.setUserData());
      this.createUser();
      this.isSubmitted = false;
      alertify.set('notifier','position', 'top-right');
      alertify.success("Record inserted successfully");
    }
    else
    {
      alertify.set('notifier','position', 'top-right');
      alertify.error("All fields are required.");
    }
  }



  //getter methods
  get name(){
    return this.registerationForm.get('name') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

}

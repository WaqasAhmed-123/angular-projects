import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerationForm: FormGroup;

  constructor() { }

  ngOnInit()
  {
    this.registerationForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email:new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl('+92', Validators.required)
    }, this.matchPassword);

    //can also set values like below
    // this.registerationForm.controls['name'].setValue('Mr. ');
  }

  matchPassword(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  onSubmit(){
    console.log(this.registerationForm);
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

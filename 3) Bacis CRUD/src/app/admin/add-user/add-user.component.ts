import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  isSubmitted: boolean = false;
  isLoading: boolean = false;

  formGroup = new FormGroup({
    role:new FormControl(null, [Validators.required]),
    name:new FormControl(null, [Validators.required, Validators.minLength(5)]),
    contact:new FormControl(null, Validators.required),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  });

  constructor(private alertify: AlertifyService, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.isSubmitted = true;
    if(this.formGroup.valid)
    {
      this.isLoading = true;
      this.apiService.PostRequest(this.getPassingObj(), '/Admin/AddUser/', true).subscribe((res)=>
      {
        if(res.status)
        {
          this.formGroup.reset();
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
      role: this.formGroup.value?.['role'],
    };
  }
}


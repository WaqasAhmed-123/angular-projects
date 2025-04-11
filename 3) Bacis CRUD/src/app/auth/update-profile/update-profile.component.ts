import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  isLoading = true;
  isSubmitted: boolean;
  loggedinId: number;
  profilePath: string = "";
  file?: any;
  fileError: string = "";

  formGroup = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(5)]),
    contact:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    file:new FormControl(''),
  });

  constructor(private alertify: AlertifyService, private apiService: ApiService){
    this.loggedinId = +this.apiService.GetLoggedinUser().id;
  }

  ngOnInit() {
    this.isLoading = true;
    this.apiService.GetRequest(`/Auth/GetLoggedinUser?id=${this.loggedinId}`, true).subscribe((res)=>{
      this.formGroup.controls['name'].setValue(res.data.name);
      this.formGroup.controls['contact'].setValue(res.data.contact);
      this.formGroup.controls['email'].setValue(res.data.email);
      this.profilePath = res.data.profile;
    }).add(()=>{
      this.isLoading = false;
    });
  }

  onFileChange(event)
  {
    if (event.target.files.length > 0)
    {
      const f = event.target.files[0];
      console.log(f);
      if(f.size > 2000000)
      {
        event.target.value = null;
        this.fileError = "Max file size 2MBs";
        return;
      }
      if(!f.type.includes('image'))
      {
        event.target.value = null;
        this.fileError = "Only images are allowed";
        return;
      }

      this.file = f;
      this.fileError = "";
    }
  }

  onSubmit()
  {
    console.log(this.formGroup);
    if(this.formGroup.valid)
    {
      this.isSubmitted = true;
      this.isLoading = true;
      this.apiService.PutRequest(this.getPassingObj(), '/Auth/UpdateProfile/', true).subscribe((res)=>
      {
        if(res.status)
        {
          localStorage.setItem('loggedinUser', JSON.stringify(res.data));
          this.alertify.ShowWarning("Profile updation in progress, please wait.");
          setTimeout(function(){
            location.reload();
          },2000);
        }
        else
        {
          this.alertify.ShowError(res.message);
        }

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
    const formData = new FormData();
    formData.append("id", this.loggedinId!.toString());
    formData.append("name", this.formGroup.value?.['name']!.toString());
    formData.append("contact", this.formGroup.value?.['contact']!.toString());
    formData.append("email", this.formGroup.value?.['email']!.toString());
    formData.append("file", this.file);
    return formData;
  }

}

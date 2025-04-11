import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.css']
})
export class SelectTestComponent implements OnInit {

  dataBuffer: any;
  bufferSize: number = 10;
  searchValue: string = "";
  loading:boolean = false;
  selectedVal = null;

  formGroup = new FormGroup({
    userId:new FormControl(null, [Validators.required])
  });

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData()
  {
    this.loading = true;
    this.apiService.GetRequest(`/Admin/UserDropDown?start=${0}&length=${this.bufferSize}&searchValue=${this.searchValue}`, true).subscribe((res)=>{
      this.dataBuffer = res.data;
    }).add(()=>{
      this.loading = false;
    });
  }

  fetchMore()
  {
    this.bufferSize = this.bufferSize+10;
    this.fetchData();
  }

  searchData(val: string)
  {
    this.bufferSize = 10;
    this.searchValue = val;
    this.fetchData();
  }

  onSubmit()
  {
    if(this.formGroup.valid)
    {
      alert(this.formGroup.value?.['userId'])
    }
    else
    {
      alert('invalid')
    }
  }

}

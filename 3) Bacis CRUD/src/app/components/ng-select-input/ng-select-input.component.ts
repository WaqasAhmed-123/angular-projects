import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ng-select-input',
  templateUrl: './ng-select-input.component.html',
  styleUrls: ['./ng-select-input.component.css']
})
export class NgSelectInputComponent implements OnInit {

  @Input() control = new FormControl();
  @Input() controlName: string;
  @Input() label: string;
  @Input() placeholder?: string = "";
  @Input() isSubmitted: boolean;
  @Input() isMultiple?: boolean = false;
  @Input() apiEndpoint: string;

  dataBuffer: any;
  bufferSize: number = 10;
  searchValue: string = "";
  loading:boolean = false;

  formGroup = new FormGroup({
    userId:new FormControl(null, [Validators.required])
  });

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  isRequired()
  {
    return this.control?.hasValidator(Validators.required);
  }

  fetchData()
  {
    this.loading = true;
    this.apiService.GetRequest(this.apiEndpoint + `?start=${0}&length=${this.bufferSize}&searchValue=${this.searchValue}`, true).subscribe((res)=>{
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

  clearSelect(event)
  {
    if(!event)
    {
      this.bufferSize = 10;
      this.searchValue = '';
      this.fetchData();
    }
  }

}

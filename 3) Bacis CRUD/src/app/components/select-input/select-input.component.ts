import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {

  @Input() label: string;
  @Input() control = new FormControl();
  @Input() controlName: string;
  @Input() placeholder?: string = "";
  @Input() isSubmitted: boolean;
  @Input() apiEndpoint?: string;
  @Input() data?: any;

  loading:boolean = false;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    if(this.apiEndpoint)
    {
      this.fetchData();
    }
  }

  fetchData()
  {
    this.loading = true;
    this.apiService.GetRequest(this.apiEndpoint!, true).subscribe((res)=>{
      this.data = res.data;
    }).add(()=>{
      this.loading = false;
    });
  }

  isRequired()
  {
    return this.control?.hasValidator(Validators.required);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit
{
  @Input() label: string;
  @Input() control = new FormControl();
  @Input() controlName: string;
  @Input() isSubmitted: boolean;

  constructor() { }
  ngOnInit() {
  }

  isRequired()
  {
    return this.control?.hasValidator(Validators.required);
  }

  toggleCheckbox(event)
  {
    if(!event.target.checked && this.isRequired())
    {
      this.control.setErrors({'required': true});
    }
  }
}

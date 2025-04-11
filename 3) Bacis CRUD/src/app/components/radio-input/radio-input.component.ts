import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})
export class RadioInputComponent implements OnInit {

  @Input() label: string;
  @Input() control = new FormControl();
  @Input() controlName: string;
  @Input() isSubmitted: boolean;
  @Input() data?: any;

  constructor() { }

  ngOnInit() {
  }

  isRequired()
  {
    return this.control?.hasValidator(Validators.required);
  }
}

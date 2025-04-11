import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input() control = new FormControl();
  @Input() type?: string = "text";
  @Input() controlName: string;
  @Input() label: string;
  @Input() placeholder?: string = "";
  @Input() isSubmitted: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  isRequired()
  {
    return this.control?.hasValidator(Validators.required);
  }
}

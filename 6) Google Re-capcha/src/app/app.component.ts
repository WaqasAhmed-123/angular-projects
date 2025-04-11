import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recapcha-practice';

  siteKey = 'site_key';

  test:any;

  inputForm = this.formBuilder.group({
    recaptchaResponse: ['', [Validators.required]]
  });
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() { }

  onSubmit() {
    console.log(this.test);
    // TODO: Validate the form and submit it to your server.
  }

}

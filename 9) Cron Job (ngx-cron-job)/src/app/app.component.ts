import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CronJobsConfig } from 'ngx-cron-jobs/src/app/lib/contracts/contracts';

import * as cronstrue from 'cronstrue';
import * as cronParser from 'cron-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cron-job';

  myConfig: CronJobsConfig = {
    quartz: false,
    multiple: false,
    bootstrap: true,
    option:{
      minute: true,
    }
  };

  inputForm = this.formBuilder.group({
    exp: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) 
  {}

  getExpression()
  {
    var exp =this.inputForm.controls.exp.value!;
    console.log('expression: ', exp);

    const decodedExpression = cronstrue.toString(exp);
    console.log('Decoded Expression: ', decodedExpression);

    const options = {
      currentDate: new Date(),
      iterator: true,
    };

    try {
      const interval = cronParser.parseExpression(exp, options);

      for (let i = 0; i < 5; i++) {
        var nextResult: cronParser.CronDate | any = interval.next();
        console.log('Date: ', new Date(nextResult.value));
      }
    } catch (error) {
      console.error('Error parsing cron expression:', error);
    }
  }
  
}

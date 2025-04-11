import { Injectable } from '@angular/core';
//in order to work following line need to declare it as ".d.ts" module
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() {
    alertify.set('notifier','position', 'top-right');
  }

  ShowMessage(msg: any, status: boolean)
  {
    if(status)
      alertify.success(msg);
    else
    alertify.error(msg);
  }

  ShowSuccess(msg: any)
  {
    alertify.success(msg);
  }

  ShowError(msg: any)
  {
    alertify.error(msg);
  }

  ShowWarning(msg: any)
  {
    alertify.warning(msg);
  }
}

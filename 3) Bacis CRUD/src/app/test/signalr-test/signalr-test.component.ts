import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SignalrService } from 'src/app/services/signalr.service';
import { HubConnection } from '@microsoft/signalr';
import { User } from '../../models/DtoCollection';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-signalr-test',
  templateUrl: './signalr-test.component.html',
  styleUrls: ['./signalr-test.component.css']
})
export class SignalrTestComponent implements OnInit, OnDestroy {

  loggedinUser;
  message: string;
  errMsg: string;
  list:Array<any> = [];

  constructor(private apiService:ApiService, private signarService:SignalrService) {
    this.loggedinUser = apiService.GetLoggedinUser();
  }

  ngOnInit() {
    //this.signarService.startConnection();
    // this.signarService.receivedMessage$.subscribe(data => {
    //   this.list.push(data);
    //   // Do something with the received message
    // });
  }

  ngOnDestroy(){

  }

  yourFunction(event)
  {
    console.log(event);
  }

  sendMessage():void {
    if(this.message.trim())
    {
      //this.signarService.sendMessage(+this.loggedinUser.id, this.loggedinUser.name, this.message);
      this.message = "";
      this.errMsg = "";
    }
    else
    {
      this.errMsg = 'Empty field not allowed.';
    }
  }
}


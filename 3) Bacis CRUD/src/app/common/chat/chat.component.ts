import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SignalrService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  loggedinUser;
  message: string;
  errMsg: string;
  list:Array<any> = [];

  private subscriptions: Subscription[] = [];

  constructor(private apiService:ApiService, private signalrService:SignalrService) {
    this.loggedinUser = apiService.GetLoggedinUser();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.signalrService.receiveMessage().subscribe((data) => {
        this.list.push(data); // Add received message to list
      })
    );
  }

  sendMessage():void {
    if(this.message.trim())
    {
      this.signalrService.sendMessage(+this.loggedinUser.id, this.loggedinUser.name, this.message);
      this.message = "";
      this.errMsg = "";
    }
    else
    {
      this.errMsg = 'Empty field not allowed.';
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

}

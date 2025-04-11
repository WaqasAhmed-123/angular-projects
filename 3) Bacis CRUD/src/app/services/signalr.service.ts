import { Injectable, OnDestroy } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';
import * as signalR from '@microsoft/signalr';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class SignalrService{
  private hubConnection: signalR.HubConnection;
  private messageSubject = new Subject<any>();

  constructor(private apiService: ApiService) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44302/notify?LoggedinUserId=hello')
      .build();
  }

  startConnection(): Observable<void> {
    return new Observable<void>((observer) => {
      this.hubConnection
        .start()
        .then(() => {
          console.log('Connection established with SignalR hub');
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          console.error('Error connecting to SignalR hub:', error);
          observer.error(error);
        });
    });
  }

  receiveMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }

  initializeListeners(): void {
    this.hubConnection.on('receiveMessage', (id: number, user: string, message: string) => {
      this.messageSubject.next({ id, user, message }); // Emit received messages
    });
  }

  ping1(): Observable<any> {
    return new Observable<any>((observer) => {
      this.hubConnection.on('ping1', (res: any) => {
        console.log(this.apiService.GetLoggedinUser());
        observer.next(res);
      });
    });
  }

  sendMessage(id: number, user: string, message: string): void {
    this.hubConnection.invoke('sendMessage', id, user, message);
  }

  stopConnection(): void {
    if (this.hubConnection.state === signalR.HubConnectionState.Connected) {
      this.hubConnection.stop()
        .then(() => console.log('SignalR connection stopped'))
        .catch(err => console.error('Error stopping SignalR connection: ', err));
    }
  }
}

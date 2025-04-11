import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SignalrService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  constructor(private signalrService:SignalrService, private apiService: ApiService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.signalrService.ping1().subscribe((message) => {
        alert(message);
      })
    );
  }

  ping1()
  {
    this.apiService.GetRequest('/Default/Ping1', true).subscribe(res=>{
      console.log(res);
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

}

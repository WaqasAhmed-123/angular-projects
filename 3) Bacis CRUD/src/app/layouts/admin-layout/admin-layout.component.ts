import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginDto } from 'src/app/models/DtoCollection';
import { ApiService } from 'src/app/services/api.service';
import { SignalrService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  status: boolean = false;
  collapseClass: string = "collapse navbar-collapse";
  subMenu1: string = "";
  subMenu2: string = "";

  loggedinUser: LoginDto;

  private subscriptions: Subscription[] = [];
  constructor(private apiService: ApiService, private signalrService: SignalrService) {}


  ngOnInit(): void
  {
    this.loggedinUser = this.apiService.GetLoggedinUser();

    this.subscriptions.push(
      this.signalrService.startConnection().subscribe(() => {
        this.signalrService.initializeListeners();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.signalrService.stopConnection();
  }

  clickEvent(){
      this.status = !this.status;
  }
  toggleCollapse()
  {
    if(this.collapseClass === "collapse navbar-collapse")
      this.collapseClass = "collapse navbar-collapse show"
    else
      this.collapseClass = "collapse navbar-collapse"
  }

  toggleSubMenu(val: number)
  {
    if(val===1)
    {
      if(this.subMenu1 == "")
          this.subMenu1 = "show";
        else
          this.subMenu1 = ""
    }

    if(val === 2)
    {
      if(this.subMenu2 == "")
          this.subMenu2 = "show";
        else
          this.subMenu2 = ""
    }
  }

  logout()
  {
    this.apiService.Logout();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapseClass: string = "collapse navbar-collapse";
  subMenu1: string = "";
  subMenu2: string = "";
public gfg = false;
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

  }
}

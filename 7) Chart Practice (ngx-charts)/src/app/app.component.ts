import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chart-practice';

  dataset = [
    { name: "X", value: 1 },
    { name: "Y", value: 2 }
  ];
}

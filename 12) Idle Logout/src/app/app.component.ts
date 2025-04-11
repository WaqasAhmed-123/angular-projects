import { Component } from '@angular/core';
import { IdleService } from './idle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private idleService: IdleService) {}

  ngOnInit(): void {
    this.idleService.startWatching();
  }
}

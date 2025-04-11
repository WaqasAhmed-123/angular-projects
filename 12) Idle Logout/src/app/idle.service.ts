import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, merge, fromEvent, switchMap, timer, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleService {

  private idleTimer$: Observable<any>;
  private idleSubscription: Subscription | undefined;
  private idleTimeLimit = 2; // 5 minutes in seconds
  private timeoutLimit = 60; // 1 minute timeout after idle period
  private idleTime = 0;

  constructor(private router: Router, private ngZone: NgZone) {
    // Capture user activity
    this.idleTimer$ = merge(
      fromEvent(window, 'mousemove'),
      fromEvent(window, 'keydown'),
      fromEvent(window, 'click'),
      fromEvent(window, 'scroll')
    );
  }

  startWatching() {
    this.ngZone.runOutsideAngular(() => {
      this.idleSubscription = this.idleTimer$
        .pipe(
          switchMap(() => timer(1000, 1000)) // Timer ticks every second
        )
        .subscribe(() => {
          this.resetIdleTime();
        });
    });

    // Check for idle time
    setInterval(() => {
      this.idleTime++;
      if (this.idleTime >= this.idleTimeLimit) {
        this.logout();
      }
    }, 1000);
  }

  resetIdleTime() {
    this.idleTime = 0;
  }

  stopWatching() {
    if (this.idleSubscription) {
      this.idleSubscription.unsubscribe();
    }
  }

  logout() {
    this.stopWatching();
    // Implement logout logic here
    window.location.href = '/login';
  }
}

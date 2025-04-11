import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError, timeout } from 'rxjs';
import { AlertifyService } from './alertify.service';
import { ApiService } from './api.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private alertify: AlertifyService, private apiService: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>
  {
    return next.handle(request)
    .pipe(
        map(res => {
          return res
        }),
        catchError((error: HttpErrorResponse) =>
        {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent)
          {
            this.alertify.ShowError('Client side error.');
            errorMsg = `Error: ${error.error.message}`;
          }
          else
          {
            if(error.status === 401)
            {
              this.alertify.ShowError('Unauthorize Access');
              setTimeout(() => {
                this.apiService.Logout();
              }, 1000);
            }
            else{
              this.alertify.ShowError('Server side error.');
              errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            }
          }

          console.log(errorMsg);
          return throwError(errorMsg);
        })
      );
    }
}

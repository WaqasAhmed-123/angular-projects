import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginDto, ResponseDto } from '../models/DtoCollection';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public headers:any;

  constructor(private http:HttpClient, private router:Router)
  {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Authorization', this.GetLoggedinUser()?.['token']);
   }

  public GetLoggedinUser(): LoginDto
  {
    let u = JSON.parse(localStorage.getItem('loggedinUser') as string);

    return u as LoginDto;
  }

  public Logout()
  {
    localStorage.removeItem('loggedinUser');
    window.location.href = '';
  }

  public GetRequest(endPoint: string, isProtected: boolean): Observable<ResponseDto>
  {
    return this.http.get<ResponseDto>(environment.apiUrl + endPoint, isProtected===true?{headers:this.headers}:{headers:null});
  }
  public PostRequest(obj: any, endPoint: string, isProtected: boolean): Observable<ResponseDto>
  {
    return this.http.post<ResponseDto>(environment.apiUrl + endPoint, obj, isProtected===true?{headers:this.headers}:{headers:null});
  }
  public PutRequest(obj: any, endPoint: string, isProtected: boolean): Observable<ResponseDto>
  {
    return this.http.put<ResponseDto>(environment.apiUrl + endPoint, obj, isProtected===true?{headers:this.headers}:{headers:null});
  }
  public DeleteRequest(endPoint: string, isProtected: boolean): Observable<ResponseDto>
  {
    return this.http.delete<ResponseDto>(environment.apiUrl + endPoint, isProtected===true?{headers:this.headers}:{headers:null});
  }

}

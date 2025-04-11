import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders = new HttpHeaders({
    'Authorization': environment.token,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  createChat(metadata: any) 
  {
    return this.http.post(`${environment.baseUrl}/chat`, metadata, { headers: this.headers });
  }

  getChats() {
    return this.http.get(environment.baseUrl+'/chat', { headers: this.headers });
  }

  updateChatTitle(chatId: string, metadata: any) 
  {
    return this.http.put(`${environment.baseUrl}/chat/${chatId}/metadata`, metadata, { headers: this.headers });
  }

  deleteChatHistory(chatId: string) 
  {
    return this.http.delete(`${environment.baseUrl}/chat/${chatId}`, { headers: this.headers });
  }

  getChatHistory(chatId: string)
  {
    return this.http.get(environment.baseUrl+'/chat/' + chatId + '/history', { headers: this.headers });
  }

  createMessage(chatId: string, metadata: any) 
  {
    return this.http.post(`${environment.baseUrl}/chat/${chatId}/question?brain_id=${metadata.brain_id}`, metadata, { headers: this.headers });
  }
}

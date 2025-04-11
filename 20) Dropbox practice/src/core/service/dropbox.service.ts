import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropboxService {
  private accessToken = environment.accessToken;

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const dropboxPath = `/uploads/${file.name}`;

    const reader = new FileReader();
    return new Observable(observer => {
      reader.onload = () => {
        const fileData = reader.result as ArrayBuffer;

        const headers = new HttpHeaders({
          Authorization: `Bearer ${this.accessToken}`,
          'Dropbox-API-Arg': JSON.stringify({
            path: dropboxPath,
            mode: 'add',
            autorename: true,
            mute: false
          }),
          'Content-Type': 'application/octet-stream'
        });

        this.http.post('https://content.dropboxapi.com/2/files/upload', fileData, { headers })
          .subscribe({
            next: (response) => {
              observer.next(response);
              observer.complete();
            },
            error: (error) => {
              observer.error(error);
            }
          });
      };

      reader.readAsArrayBuffer(file);
    });
  }


  getFilesList(): any {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    });

    const body = {
      path: '/uploads',
      recursive: false
    };

    return this.http.post('https://api.dropboxapi.com/2/files/list_folder', body, { headers });
  }

  getDownloadLink(filePath: string): any {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    });

    const body = { path: filePath };

    return this.http.post('https://api.dropboxapi.com/2/files/get_temporary_link', body, { headers });
  }

  deleteFile(filePath: string): any {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    });

    const body = { path: filePath };

    return this.http.post('https://api.dropboxapi.com/2/files/delete_v2', body, { headers });
  }

  getTemporaryLink(filePath: string): any {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    });

    const body = { path: filePath };

    return this.http.post('https://api.dropboxapi.com/2/files/get_temporary_link', body, { headers });
  }

}

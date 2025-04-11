import { Component, ElementRef, ViewChild } from '@angular/core';
import { DropboxService } from 'src/core/service/dropbox.service';


// signup/signin to dropbox account (https://www.dropbox.com/login)
// goto Dropbox App console
// create a new APP in console
// and set Scoped access and choose the API type (e.g., Full Dropbox or App folder).
// after app creation and then select "Settings" tab and go bottom to find "OAuth 2"
// section and click "Generate Token" button which will create access token
// now use this token to hit following APIs

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef | undefined;

  uploadFiles: File[] = [];
  selectedFiles: any[] = [];
  responseMsg:any = {};

  constructor(private dropboxService: DropboxService) {}

  ngOnInit() {
    this.loadFiles();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadFiles = Array.from(input.files);
    }
    else
      this.uploadFiles = [];
  }

  async onUpload() {
    if (this.uploadFiles.length === 0) {
      this.showResponse("No files selected!", 3);
      return;
    }

    this.showResponse("Files uploading", 2);

    const uploadPromises = this.uploadFiles.map(file => {

      return new Promise((resolve, reject) => {
        this.dropboxService.uploadFile(file).subscribe({
          next: (response) => {
            this.showResponse(`Uploaded: ${file.name}`, 2);
            resolve(response);
          },
          error: (error) => {
            this.showResponse(`Upload error: ${file.name}`, 3);
            reject(error);
          }
        });
      });
    });

    try{
      await Promise.all(uploadPromises);
      this.showResponse(`Files uploaded!`, 1);
    }
    catch (error)
    {
      console.log(error);
      this.showResponse(`Files uploaded with some error!`, 3);
    }

    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }

    this.loadFiles();
  }


  loadFiles() {
    this.dropboxService.getFilesList().subscribe((response: any) => {
      this.selectedFiles = response.entries;
    }, (error:any) => {
      console.error(error);
      this.showResponse("Error fetching file list", 3);
    });
  }

  downloadFile(filePath: string) {
    this.dropboxService.getDownloadLink(filePath).subscribe((response: any) => {
      window.open(response.link, '_blank');
    }, (error:any) => {
      console.error(error);
      this.showResponse("Error getting download link", 3);
    });
  }

  deleteFile(filePath: string) {
    if (!confirm('Are you sure you want to delete this file?')) return;

    this.dropboxService.deleteFile(filePath).subscribe(() => {
      this.selectedFiles = this.selectedFiles.filter(file => file.path_lower !== filePath);
      this.showResponse('File (' + filePath+ ') deleted!', 1);
    }, (error:any) => {
      console.error(error);
      this.showResponse('Error deleting file!', 3);
    });
  }

  private timeoutId: any;
  showResponse(msg:string, type:number)
  {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.responseMsg = {'msg': msg, 'class': type === 1 ? 'text-success': type === 2 ? 'text-info' : 'text-danger'};

    this.timeoutId = setTimeout(() => {
      this.responseMsg = {};
    }, 2500);
  }
}


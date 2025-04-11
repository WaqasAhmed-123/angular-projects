import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {

  @Output() confirmCallbackFunc = new EventEmitter<any>();
  isLoading = false;
  modalClass = "none";
  message?;
  endPoint;

  constructor(private apiService: ApiService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  public openModal(endpoint: string, msg?: string) {
    this.message = msg;
    this.endPoint = endpoint;
    this.modalClass = "block";
  }

  confirmDelete()
  {
    this.isLoading = true;
    this.apiService.DeleteRequest(this.endPoint, true).subscribe((res) =>
    {
      this.confirmCallbackFunc.emit(res);
    }).add(()=>{
      this.isLoading = false;
      this.modalClass = 'none';
    });
  }

}

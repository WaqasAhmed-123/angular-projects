import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { DatatableComponent } from 'src/app/components/datatable/datatable.component';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit
{
  editModalClass = 'none';
  isLoading = false;
  isSubmitted = false;
  @ViewChild(DatatableComponent) dataTable: DatatableComponent;
  @ViewChild(DeleteModalComponent) delModal: DeleteModalComponent;

  endpoint = "/Admin/GetUserDataTable";
  tableHeader =
  [
    {
      'title': 'Profile',
      'value': '',
      'sortable': false
    },
    {
      'title': 'Name',
      'value': 'Name',
      'sortable': true
    },
    {
      'title': 'Contact Number',
      'value': 'Contact',
      'sortable': true
    },
    {
      'title': 'Email',
      'value': 'Email',
      'sortable': true
    },
    {
      'title': 'Action',
      'value': '',
      'sortable': false
    }
  ];

  formGroup = new FormGroup({
    id: new FormControl(''),
    name:new FormControl('', [Validators.required, Validators.minLength(5)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    contact:new FormControl('', Validators.required),
  });

  constructor(private alertifyService:AlertifyService, private apiService: ApiService) {}

  ngOnInit(): void {

  }

  edit(id)
  {
    this.isLoading = true;
    this.apiService.GetRequest('/Admin/GetUserById?id='+id, true).subscribe((res)=>
    {
      if(res.status)
      {
        this.formGroup.setValue({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          contact: res.data.contact
        });

        this.editModalClass = 'block';
      }
      else
      {
        this.alertifyService.ShowMessage(res.message, res.status);
      }
    }).add(()=>{
      this.isLoading = false;
    });
  }

  confirmEdit()
  {
    this.isSubmitted = true;
    if(this.formGroup.valid)
    {
      this.isLoading = true;
      this.apiService.PutRequest(this.getPassingObj(), '/Admin/UpdateUser/', true).subscribe((res)=>
      {
        if(res.status)
        {
          this.formGroup.reset();
          this.editModalClass = 'none';
          this.dataTable.resetTable();
        }

        this.alertifyService.ShowMessage(res.message, res.status);

      }).add(()=>{
        this.isSubmitted = false;
        this.isLoading = false;
      });
    }
    else
    {
      this.alertifyService.ShowError("All fields are required.");
    }
  }

  getPassingObj(): any
  {
    return {
      id: this.formGroup.value?.['id'],
      name: this.formGroup.value?.['name'],
      contact: this.formGroup.value?.['contact'],
      email: this.formGroup.value?.['email'],
    };
  }

  delete(id)
  {
    this.delModal.openModal('/Admin/DeleteUser?id='+id, 'user');
  }

  confirmDelete(res: any)
  {
    this.alertifyService.ShowMessage(res.message, res.status);
    if(res.status)
    {
      this.dataTable.resetTable();
    }
  }

  //test function (working)
  parentFunction(count: number){
    alert("Call received from child to parent with vlaue # " + count);
  }
}

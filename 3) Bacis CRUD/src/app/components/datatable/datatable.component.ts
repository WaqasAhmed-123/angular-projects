import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() temp: TemplateRef<any>;
  @Input() tableHeader;
  @Input() endpoint;
  @Output() chilRefFunc = new EventEmitter<any>();

  isLoading = false;
  totalRows = 0;
  currentRows = 0;
  currentPage = 0;
  pageSize = 10;
  totalPages = 1;
  sortColumnName = "";
  sortDirection = "asc";
  searchValue = "";
  isAltered = false;

  dataList : Array<any>;

  constructor(private apiService: ApiService, private alertify: AlertifyService) {
  }

  ngOnInit()
  {
    this.setTable();
  }

  setTable(): void
  {
    this.isLoading = true;
    this.apiService.PostRequest(null, this.endpoint+`?start=${this.currentPage}&length=${this.pageSize}&sortColumnName=${this.sortColumnName}&sortDirection=${this.sortDirection}&searchValue=${this.searchValue}`, true).subscribe((res) => {
      this.dataList= res.data.data;
      this.currentRows = res.data.recordsFiltered
      this.totalRows=res.data.totalRecords;
    }).add(()=>{
      this.isLoading = false;
    });
  }

  applyFilter(filterValue: string)
  {
    this.searchValue = filterValue;
    this.currentPage = 0;
    this.isAltered = true;

    this.setTable();
  }

  sortTable(colName)
  {
    if(colName != "")
    {
      this.sortColumnName = colName;
      if(this.sortDirection === "asc")
      {
        this.sortDirection = "desc";
      }
      else
      {
        this.sortDirection = "asc";
      }
      this.isAltered = true;

      this.setTable();
    }
  }

  goStart()
  {
    if(this.currentPage != 0)
    {
      this.currentPage = 0;
      this.isAltered = true;
      this.setTable()
    }
  }

  goPrev()
  {
    if(this.currentPage>0)
    {
      this.currentPage--;
      this.isAltered = true;
      this.setTable()
    }
  }

  goNext()
  {
    this.totalPages = Math.ceil(this.totalRows/this.pageSize);
    if(this.currentPage+1<this.totalPages)
    {
      this.currentPage++;
      this.isAltered = true;
      this.setTable()
    }
  }

  goLast()
  {
    this.totalPages = Math.ceil(this.totalRows/this.pageSize);
    if(this.currentPage+1 != this.totalPages)
    {
      this.currentPage= this.totalPages-1;
      this.isAltered = true;
      this.setTable()
    }
  }

  changeLength(pgSize:number)
  {
      this.pageSize = +pgSize;
      this.currentPage = 0;
      this.isAltered = true;
      this.setTable();
  }

  public resetTable()
  {
    this.currentPage = 0;
    this.pageSize = 10;
    this.totalPages = 1;
    this.sortColumnName = "";
    this.sortDirection = "asc";
    this.searchValue = "";
    this.isAltered = false;

    this.setTable();
  }

  onClick()
  {
    this.chilRefFunc.emit(1);
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.css']
})
export class GridTestComponent implements OnInit {

  data: any[] = [];
  start: number = 0;
  length: number = 10;
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData()
  {
    this.isLoading = true;
    this.apiService.PostRequest(null, `/Admin/GetUserGrid?start=${this.start}&length=${this.length}`, true).subscribe((res)=>{
      res.data.forEach(element => {
        this.data.push(element);
      });
    }).add(()=>{
      this.isLoading = false;
    });
  }

  onScrollDown() {
    this.start = this.start+ this.length;
    this.getData();
  }

  onEdit(id)
  {
    alert("Edit clicked# " + id);
  }

  onDelete(id)
  {
    alert("Delete clicked# " + id);
  }

}

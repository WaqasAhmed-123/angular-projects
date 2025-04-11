import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-test',
  templateUrl: './checkbox-test.component.html',
  styleUrls: ['./checkbox-test.component.css']
})
export class CheckboxTestComponent implements OnInit {

  masterSelected:boolean = false;
  data:any;
  selected:any;
  errMsg = "";

  ngOnInit(): void {

  }
  constructor(){

    setTimeout(() => {
      this.data = [
        {id:1,name:'User 1',isSelected:false},
        {id:2,name:'User 2',isSelected:false},
        {id:3,name:'User 3',isSelected:false},
        {id:4,name:'User 4',isSelected:false},
        {id:5,name:'User 5',isSelected:false},
        {id:6,name:'User 6',isSelected:false},
        {id:7,name:'User 7',isSelected:false},
        {id:8,name:'User 8',isSelected:false}
      ];
      this.getCheckedItemList();
    }, 1000);

  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.data.length; i++) {
      this.data[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.data.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList()
  {
    this.selected = [];
    for (var i = 0; i < this.data.length; i++) {
      if(this.data[i].isSelected)
        this.selected.push(this.data[i].id);
    }
  }

  onSubmit()
  {
    if(this.selected.length > 0)
    {

      alert(JSON.stringify(this.selected));
      this.masterSelected = false;
      this.checkUncheckAll();
      this.errMsg = "";
    }
    else
    {
      this.errMsg = "please at least 1 User";
    }
  }
}

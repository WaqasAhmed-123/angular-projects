import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.css']
})
export class ChartTestComponent implements OnInit {

  data;
  data2;

  barChartcustomColors =
  [
    { name: "Waqas Ahmed", value: 'red' },
    { name: "Ali Asghar", value: 'green' },
    { name: "Qaiser Javed", value: 'blue' },
  ]

  constructor() {

    setTimeout(() => {
      this.data = [
        {
          name: 'Waqas Ahmed',
          value: 9,
          extra : {
            id: 1
          }
        },
        {
          name: 'Ali Asghar',
          value: 8.5,
          extra : {
            id: 2
          }
        },
        {
          name: 'Qaiser Javed',
          value: 10,
          extra : {
            id: 3
          }
        },
      ];

      this.data2 = [
        {
          "name": "Waqas Ahmed",
          "series": [
            {
              "name": "Mid",
              "value": 2
            },
            {
              "name": "Final",
              "value": 4
            },
            {
              "name": "Project",
              "value": 3
            }
          ]
        },

        {
          "name": "Ali Asghar",
          "series": [
            {
              "name": "Mid",
              "value": 4
            },
            {
              "name": "Final",
              "value": 2
            },
            {
              "name": "Project",
              "value": 2.5
            }
          ]
        },
        {
          "name": "Qaiser Javed",
          "series": [
            {
              "name": "Mid",
              "value": 3
            },
            {
              "name": "Final",
              "value": 3
            },
            {
              "name": "Project",
              "value": 4
            }
          ]
        }
      ];

    }, 1000);

  }

  ngOnInit() {
  }

  onSelect(event) {
    alert(JSON.stringify(event));
  }


}

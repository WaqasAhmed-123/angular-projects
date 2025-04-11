import { Component, TemplateRef, ViewChild } from '@angular/core';
import { GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {
  gridOptions: GridsterConfig;
  gridItems: GridsterItem[];

  @ViewChild('testTemplate') testTemplate: TemplateRef<any>;

  constructor() {
    this.gridOptions = {
      gridType: 'scrollVertical', // "fit" adjusts grid size to container, "scrollVertical" or "scrollHorizontal" for scrolling
      compactType: 'none', // 'compactUp', 'compactLeft', or 'none'
      margin: 2, // Margin between grid items (pixels)
      minCols: 4, // Minimum number of columns
      maxCols: 12, // Maximum number of columns
      minRows: 6, // Minimum number of rows
      maxRows: 3, // Minimum number of rows
      outerMargin: true,
      pushItems: true,
      disableWarnings: true, //disable console log warnings about misplacement of grid items
      // draggable: {
      //   enabled: true,
      //   // Set passive events for better performance
      //   dragHandleClass: 'drag-handle',
      //   ignoreContentClass: 'ignore-drag',
      //   stop: (event, item) => console.log('Drag stopped:', item),
      // },
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: Page2Component.eventStop,
        start: Page2Component.eventStart,
      },
      resizable: {
        enabled: true, // Enable resizing
        stop: (event, item) => console.log('Resize stopped:', item),
      },
      enableEmptyCellClick: true,
      emptyCellClickCallback: this.emptyCellClick.bind(this),
      emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      emptyCellDragCallback: this.emptyCellClick.bind(this),
    };

    this.gridItems = [
      { cols: 2, rows: 2, y: 0, x: 0, content: '<b>Item 1</b>', initCallback: this.initItem.bind(this)},
      { cols: 2, rows: 1, y: 0, x: 2, content: 'Item 2', dragEnabled: false, resizeEnabled: true,
        resizableHandles: {
          s: false, //resize from bottom
          e: false, //resize from right
          n: false, //resize from top
          w: false, //resize from left
          se: false, //bottom right corner resizing
          ne: false, //top right corner resizing
          sw: false, //bottom left corner resizing
          nw: false //top left corner resizing
          },
        },
      { cols: 1, rows: 1, y: 0, x: 4, content: 'Item 3' },
      { cols: 1, rows: 1, y: 2, x: 2, content: 'Item 4'},
    ];
  }


  initItem(item: GridsterItem, itemComponent: any) {
    console.log(item)
  }


  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.info('eventStart', item, itemComponent, event);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.info('eventStop', item, itemComponent, event);
  }

  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    console.info('empty clicked', event, item);
  }

  removeItem($event:any, item: GridsterItem) {
    // this.gridItems = this.gridItems.filter((i) => i !== item);

    $event.preventDefault();
    $event.stopPropagation();
    this.gridItems.splice(this.gridItems.indexOf(item), 1);
  }

  addItem() {
    this.gridItems.push({
      cols: 2,
      rows: 2,
      y: 0,
      x: 0,
      minItemCols: 2,
      minItemRows: 2,
      content: `<b>Item ${this.gridItems.length + 1}</b>`,
    });
  }
}

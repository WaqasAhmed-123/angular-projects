import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';import { CompactType, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterPush, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  itemToPush: GridsterItemComponent;

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 3, rows: 2, y: 1, x: 4},
      {cols: 1, rows: 1, y: 4, x: 5},
      {cols: 1, rows: 1, y: 2, x: 1},
      {cols: 2, rows: 2, y: 5, x: 5},
      {cols: 2, rows: 2, y: 3, x: 2},
      {cols: 2, rows: 1, y: 2, x: 2},
      {cols: 1, rows: 1, y: 3, x: 4},
      {cols: 1, rows: 1, y: 0, x: 6}
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: any, item: any) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  initItem(item: GridsterItem, itemComponent: GridsterItemComponent) {
    this.itemToPush = itemComponent;
  }

  pushItem() {
    const push = new GridsterPush(this.itemToPush); // init the service
    this.itemToPush.$item.rows += 4; // move/resize your item
    if (push.pushItems(push.fromNorth)) { // push items from a direction
      push.checkPushBack(); // check for items can restore to original position
      push.setPushedItems(); // save the items pushed
      this.itemToPush.setSize();
      this.itemToPush.checkItemChanges(this.itemToPush.$item, this.itemToPush.item);
    } else {
      this.itemToPush.$item.rows -= 4;
      push.restoreItems(); // restore to initial state the pushed items
    }
    push.destroy(); // destroy push instance
    // similar for GridsterPushResize and GridsterSwap
  }
}

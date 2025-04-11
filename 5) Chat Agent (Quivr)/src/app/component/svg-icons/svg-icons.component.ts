import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./svg-icons.component.scss']
})
export class SvgIconsComponent {
  @Input() iconName: string = '';
  @Input() width?: number = 20;
  @Input() height?: number | null = null;
  @Input() fill?: string = '#000000';

  ngOnInit()
  {
    if(!this.height)
    {
      this.height = this.width;
    }
  }
}

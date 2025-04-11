import { Component } from '@angular/core';
import * as fabric from 'fabric';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  canvas: fabric.Canvas;

 // Brushes
 vLinePatternBrush!: fabric.PatternBrush;
 hLinePatternBrush!: fabric.PatternBrush;
 squarePatternBrush!: fabric.PatternBrush;
 diamondPatternBrush!: fabric.PatternBrush;
 texturePatternBrush!: fabric.PatternBrush;

  ngOnInit(){
    this.canvas = new fabric.Canvas('myCanvas', {
      width: window.innerWidth-100,
      height: 600,
      selection: true,
      isDrawingMode: true,
    });

    // Set default drawing brush properties
    this.initializeBrushes();
    this.setDrawingBrushProperties();

  }

  initializeBrushes(): void {
    // Vertical line brush
    this.vLinePatternBrush = new fabric.PatternBrush(this.canvas);
    this.vLinePatternBrush.getPatternSrc = function () {
      const patternCanvas = fabric.getEnv().document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      const ctx = patternCanvas.getContext('2d');
      if(ctx)
      {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(10, 5);
        ctx.closePath();
        ctx.stroke();
      }

      return patternCanvas;
    };

    // Horizontal line brush
    this.hLinePatternBrush = new fabric.PatternBrush(this.canvas);
    this.hLinePatternBrush.getPatternSrc = function () {
      const patternCanvas = fabric.getEnv().document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      const ctx = patternCanvas.getContext('2d');
      if(ctx)
      {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(5, 0);
        ctx.lineTo(5, 10);
        ctx.closePath();
        ctx.stroke();
      }

      return patternCanvas;
    };

    // Square brush
    this.squarePatternBrush = new fabric.PatternBrush(this.canvas);
    this.squarePatternBrush.getPatternSrc = function () {
      const squareWidth = 10,
        squareDistance = 2;
      const patternCanvas = fabric.getEnv().document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      const ctx = patternCanvas.getContext('2d');
      ctx!.fillStyle = this.color;
      ctx!.fillRect(0, 0, squareWidth, squareWidth);
      return patternCanvas;
    };

    // Diamond brush
    this.diamondPatternBrush = new fabric.PatternBrush(this.canvas);
    this.diamondPatternBrush.getPatternSrc = function () {
      const squareWidth = 10,
        squareDistance = 5;
      const patternCanvas = fabric.getEnv().document.createElement('canvas');
      const rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color,
      });

      const canvasWidth = rect.getBoundingRect().width;
      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

      const ctx = patternCanvas.getContext('2d');
      rect.render(ctx!);
      return patternCanvas;
    };
  }

  setDrawingBrushProperties(): void
  {
    if (!this.canvas.freeDrawingBrush) {
      this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas);
    }


    this.canvas.freeDrawingBrush.color = '#000000'; // Default color
    this.canvas.freeDrawingBrush.width = 5; // Default line width
    this.canvas.freeDrawingBrush.shadow = new fabric.Shadow({
      blur: 0,
      offsetX: 0,
      offsetY: 0,
      affectStroke: true,
      color: '#000000',
    });
  }

  onClearCanvas(): void {
    this.canvas.clear();
  }

  onToggleDrawingMode(): void {
    this.canvas.isDrawingMode = !this.canvas.isDrawingMode;
  }

  onBrushChange(event: any): void {
    var brushType = event.value;

    switch (brushType) {
      case 'vline':
        this.canvas.freeDrawingBrush = this.vLinePatternBrush;
        break;
      case 'hline':
        this.canvas.freeDrawingBrush = this.hLinePatternBrush;
        break;
      case 'square':
        this.canvas.freeDrawingBrush = this.squarePatternBrush;
        break;
      case 'diamond':
        this.canvas.freeDrawingBrush = this.diamondPatternBrush;
        break;
      default:
        this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas);
    }
    this.canvas.freeDrawingBrush!.width = 20;
  }

  onColorChange(event: any): void {
    this.canvas.freeDrawingBrush!.color = event.value;
  }

  onLineWidthChange(event: any): void {
    this.canvas.freeDrawingBrush!.width = parseInt(event.value, 10) || 1;
  }

  onShadowBlurChange(event: any): void {
    this.canvas.freeDrawingBrush!.shadow!.blur = parseInt(event.value, 10) || 0;
  }

  onShadowColorChange(event: any): void {
    this.canvas.freeDrawingBrush!.shadow!.color = event.value;
  }
}

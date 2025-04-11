import { Component, HostListener} from '@angular/core';
import * as fabric from 'fabric';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  canvas: any;

  elementSelected = false;
  copiedObject: any;

  ngOnInit(){
    this.canvas = new fabric.Canvas('myCanvas', {
      width: window.innerWidth-100,
      height: 600,
      selection: true,
      backgroundColor : 'rgba(137, 137, 143, 0.19)',
    });


    this.addEventListeners();
  }

  addEventListeners(): void {
    this.canvas.on('selection:created', (event:any) => {
      const selectedObject = event.selected[0];
      console.log('Selected Object:', selectedObject);
      this.elementSelected = true;
    });

    this.canvas.on('selection:cleared', () => {
      console.log('Selection cleared.');
      this.elementSelected = false;
    });

    // working code
    // this.canvas.on('mouse:over', (e:any) => {
    //   e?.target?.set('fill', 'red');
    //   this.canvas.renderAll();
    // });

    // this.canvas.on('mouse:out', (e:any)=> {
    //   e?.target?.set('fill', 'green');
    //   this.canvas.renderAll();
    // });
  }


  addText()
  {
    const text = new fabric.Textbox('Hello World', {
      width: 130,
      height: 100,
      fontSize: 24,
      left: 5,
      top: 50,
      fill: 'red',
      textBackgroundColor: 'white',
      cursorColor: 'blue',
    });
    this.canvas.add(text);
  }

  addRectangle()
  {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'blue',
      width: 170,
      height: 100
    });
    this.canvas.add(rect);
  }

  addTriangle()
  {
    const triangle = new fabric.Triangle({
      width: 100,
      height: 100,
      left: 10,
      top: 30,
      fill: '#cca',
    });
    this.canvas.add(triangle);
  }

  addCircle(): void {
    const circle = new fabric.Circle({
      left: 100,
      top: 100,
      fill: 'red',
      radius: 50
    });
    this.canvas.add(circle);
  }

  addPolygon(): void {
    const polygon = new fabric.Polygon(
      [
        { x: 200, y: 10 },
        { x: 250, y: 50 },
        { x: 200, y: 100 },
        { x: 150, y: 50 }
      ],
      {
        left: 300,
        top: 200,
        fill: 'purple'
      }
    );
    this.canvas.add(polygon);
  }

  addCustom()
  {
    const points = [
      {
        x: 3,
        y: 4,
      },
      {
        x: 16,
        y: 3,
      },
      {
        x: 30,
        y: 5,
      },
      {
        x: 25,
        y: 55,
      },
      {
        x: 19,
        y: 44,
      },
      {
        x: 15,
        y: 30,
      },
      {
        x: 15,
        y: 55,
      },
      {
        x: 9,
        y: 55,
      },
      {
        x: 6,
        y: 53,
      },
      {
        x: -2,
        y: 55,
      },
      {
        x: -4,
        y: 40,
      },
      {
        x: 0,
        y: 20,
      },
    ];

    const poly = new fabric.Polygon(points, {
      left: 200,
      top: 50,
      fill: 'yellow',
      strokeWidth: 1,
      stroke: 'grey',
      scaleX: 5,
      scaleY: 5,
      objectCaching: false,
      transparentCorners: false,
      cornerColor: 'blue',
    });
    this.canvas.add(poly);

    let editing = false;
    poly.on('mousedblclick', () => {
      editing = !editing;
      if (editing) {
        poly.cornerStyle = 'circle';
        poly.cornerColor = 'rgba(0,0,255,0.5)';
        poly.hasBorders = false;
        poly.controls = fabric.controlsUtils.createPolyControls(poly);
      } else {
        poly.cornerColor = 'blue';
        poly.cornerStyle = 'rect';
        poly.hasBorders = true;
        poly.controls = fabric.controlsUtils.createObjectDefaultControls();
      }
      poly.setCoords();
      this.canvas.requestRenderAll();
    });
  }

  addImage()
  {
    const imgEl = document.createElement('img');
    imgEl.src = 'assets/pepsico-logo.png';

    imgEl.onload = () => {
      const img = new fabric.FabricImage(imgEl, {
        left: 10,
        top: 20,
        scaleX: 0.1, //width
        scaleY: 0.1 //height
      });

      this.canvas.add(img);
    };
  }

  addVideo()
  {
    const videoEl = document.createElement('video');
    videoEl.width = 300;
    videoEl.height = 200;
    videoEl.muted = false;
    videoEl.loop = true;

    const videosource = document.createElement('source');
    videosource.src = 'assets/clip.mp4';
    videoEl.appendChild(videosource);

    videoEl.onloadeddata  = () => {

      const video = new fabric.FabricImage(videoEl, {
        left: 200,
        top: 200,
        originX: 'center',
        originY: 'center',
        objectCaching: false,
      });


      this.canvas.add(video);

      videoEl.play();

      //code to run the image frames
      const updateCanvas = () => {
        if (!videoEl.paused) {
          video.setElement(videoEl);
          this.canvas.renderAll();
        }
        requestAnimationFrame(updateCanvas);
      };
      requestAnimationFrame(updateCanvas);
      //code to run the image frames

    };
  }

  addLine(): void {
    const line = new fabric.Line([100, 100, 300, 100], {
      stroke: 'black',
      strokeWidth: 3,
      selectable: true
    });

    this.canvas.add(line);
  }

  addSvg(): void {
    // Define the SVG path for a heart
    const svg = new fabric.Path('<svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 471.701 471.701" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path> </g> </g></svg>', {
      left: 100,
      top: 100,
      fill: 'red',
      stroke: 'yellow',
      strokeWidth: 2
    });

    svg.scaleX = 0.3;
    svg.scaleY = 0.3;

    this.canvas.add(svg);
  }

  copy() {
    const activeObject = this.canvas.getActiveObject();

    if (activeObject)
    {
      activeObject.clone()
      .then((cloned: any) => {
        this.copiedObject = cloned;
      });
    } else {
      alert('Please select an element to copy.');
    }
  }

  paste() {
    this.canvas.discardActiveObject(); //remove element selection

    //slightly changing the position of new element
    this.copiedObject.set({
      left: this.copiedObject.left + 10,
      top: this.copiedObject.top + 10,
    });

    if (this.copiedObject instanceof fabric.ActiveSelection)
    {
      // active selection needs a reference to the canvas.
      this.copiedObject.canvas = this.canvas;
      this.copiedObject.forEachObject((obj) => {
        this.canvas.add(obj);
      });
      // this should solve the unselectability
      this.copiedObject.setCoords();
    } else {
      this.canvas.add(this.copiedObject);
    }
    this.copiedObject.top += 10;
    this.copiedObject.left += 10;

    this.canvas.setActiveObject(this.copiedObject);
    this.canvas.requestRenderAll();
    this.copiedObject = null;
  }


  group(): void
  {
    if(this.canvas.getActiveObjects().length < 2)
    {
      alert("Please select atleast 2 elements to group!");
      return;
    }
    const activeObject = this.canvas.getActiveObject();

    const group = new fabric.Group(activeObject.removeAll());
    this.canvas.add(group);
    this.canvas.setActiveObject(group);
    this.canvas.requestRenderAll();
  }

  ungroup(): void {
    const activeObject = this.canvas.getActiveObject();
    if (!activeObject || activeObject.type !== 'group') {
      return;
    }

    this.canvas.remove(activeObject);
    const activeSelection = new fabric.ActiveSelection(
      activeObject.removeAll(),
      {
        canvas: this.canvas,
      }
    );

    this.canvas.setActiveObject(activeSelection);
    this.canvas.requestRenderAll();
  }




  deleteSelected(): void {
    const activeObjects = this.canvas.getActiveObjects();

    if (activeObjects?.length > 0)
    {
      if (confirm('Are you sure you want to delete the selected elements?')) {
        activeObjects.forEach((obj: any) => this.canvas.remove(obj));
        this.canvas.discardActiveObject();
        this.canvas.renderAll();
      }
    }
    else {
      alert('Please select at least one element!');
    }
  }

  exportCanvas(): void {
    const dataURL = this.canvas.toDataURL({
      format: 'png',
      quality: 1
    });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-image.png';
    link.click();
  }

   // private state: any[] = [];
  // private currentStateIndex = -1;

  // saveState(): void {
  //   this.currentStateIndex++;
  //   this.state = this.state.slice(0, this.currentStateIndex); // Remove future states
  //   this.state.push(this.canvas.toJSON());
  //   console.log(this.state)
  // }

  // undo(): void {
  //   if (this.currentStateIndex > 0) {
  //     this.currentStateIndex--;
  //     this.canvas.loadFromJSON(this.state[this.currentStateIndex], this.canvas.renderAll.bind(this.canvas));
  //   }
  // }

  // redo(): void {
  //   if (this.currentStateIndex < this.state.length - 1) {
  //     this.currentStateIndex++;
  //     this.canvas.loadFromJSON(this.state[this.currentStateIndex], this.canvas.renderAll.bind(this.canvas));
  //   }
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    const newWidth = window.innerWidth - 100;

    // Update canvas width
    this.canvas.setWidth(newWidth);

    // Optional: Adjust objects to fit the new size
    this.canvas.getObjects().forEach((obj: any) => {
      obj.left = (obj.left ?? 0) * (newWidth / this.canvas.width!);
    });

    this.canvas.renderAll();
  }
}

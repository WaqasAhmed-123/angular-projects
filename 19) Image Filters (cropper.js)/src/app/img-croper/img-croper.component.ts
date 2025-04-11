import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import Cropper from 'cropperjs';


//need to install following libraries
//npm install cropperjs --save
//npm install --save-dev @types/cropperjs

@Component({
  selector: 'app-img-croper',
  templateUrl: './img-croper.component.html',
  styleUrls: ['./img-croper.component.scss']
})
export class ImgCroperComponent {
  @ViewChild('image', { static: false }) imageElement!: ElementRef<HTMLImageElement>;
  @ViewChild('cropImage', { static: false }) cropImageElement!: ElementRef<HTMLImageElement>;
  cropper!: Cropper;

  imageSrc: any = null;
  filteredImgSrc: any = null;

  finalFilteredImage: string | null = null;
  isCropMode = false;

  // Filters
  sepia: number = 0;
  grayScale: number = 0;
  hueRotate: number = 0;
  brightness: number = 1;
  contrast: number = 1;
  opacity: number = 1;
  blur: number = 0;
  invert: number = 0;
  rotation: number = 0;
  scaleX: number = 1;
  scaleY: number = 1;

  isResizeMode = false;
  resizeWidth: number = 0;
  resizeHeight: number = 0;

  constructor(private http: HttpClient) {}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result;
        this.filteredImgSrc = e.target?.result;

        this.finalFilteredImage = null;
        this.isCropMode = false;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  // Rotate Image
  rotateImage(): void {
    this.rotation += 90;
    if (this.rotation >= 360) this.rotation = 0;
  }

  // Flip Image Horizontally or Vertically
  flipImage(direction: 'horizontal' | 'vertical'): void {
    if (direction === 'horizontal') {
      this.scaleX *= -1;
    } else {
      this.scaleY *= -1;
    }
  }

  applyFilters(): void {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = new Image();
    img.src = this.filteredImgSrc as string;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.filter = `grayscale(${this.grayScale}) sepia(${this.sepia}) hue-rotate(${this.hueRotate}deg) brightness(${this.brightness}) contrast(${this.contrast}) opacity(${this.opacity}) blur(${this.blur}px) invert(${this.invert})`;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.scale(this.scaleX, this.scaleY);
      ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

      this.finalFilteredImage = canvas.toDataURL();
      this.isCropMode = true;
      setTimeout(() => this.initCropper(), 100);
    };
  }

  // Initialize CropperJS
  initCropper(): void {
    if (this.cropper) {
      this.cropper.destroy();
    }
    this.cropper = new Cropper(this.cropImageElement.nativeElement, {
      aspectRatio: NaN,
      viewMode: 1,
      scalable: true,
      zoomable: true,
      dragMode: 'crop',
      movable: true,
      cropBoxMovable: true,
      cropBoxResizable: true,
      center: true,
      responsive: true,
    });
  }

  // Apply Crop
  applyCrop(): void {
    const croppedCanvas = this.cropper.getCroppedCanvas();
    if (croppedCanvas) {
      this.finalFilteredImage = croppedCanvas.toDataURL();
      this.filteredImgSrc = this.finalFilteredImage;
      this.isCropMode = false;

      if (this.cropper) {
        this.cropper.destroy(); // Destroy existing cropper instance
      }
    }
  }

  clearCrop()
  {
    this.finalFilteredImage = null;
    this.isCropMode = false;
    if (this.cropper) {
      this.cropper.destroy();
    }
  }


  applyResize(): void
  {
    if(this.resizeWidth < 50 || this.resizeHeight < 50)
    {
      alert('Minimum allowed value is 50');
      return;
    }

    const img = new Image();
    img.src = this.filteredImgSrc as string;

    img.onload = () => {
      const resizedCanvas = document.createElement('canvas');
      const resizedCtx = resizedCanvas.getContext('2d')!;

      resizedCanvas.width = this.resizeWidth;
      resizedCanvas.height = this.resizeHeight;
      resizedCtx.drawImage(img, 0, 0, this.resizeWidth, this.resizeHeight);

      this.filteredImgSrc = resizedCanvas.toDataURL();
      this.isResizeMode = false;
    };
  }


  downloadImage(): void {
    const img = new Image();
    img.src = this.filteredImgSrc;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      canvas.width = img.width;
      canvas.height = img.height;

      // Apply transformations
      ctx.filter = `grayscale(${this.grayScale}) sepia(${this.sepia}) hue-rotate(${this.hueRotate}deg) brightness(${this.brightness}) contrast(${this.contrast}) opacity(${this.opacity}) blur(${this.blur}px) invert(${this.invert})`;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.scale(this.scaleX, this.scaleY);
      ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

      // Convert canvas to downloadable image
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'edited-image.png';
      link.click();
    };
  }

  resetEditor(): void {
    this.filteredImgSrc = this.imageSrc;

    this.clearCrop();
    this.isResizeMode = false;

    this.sepia = 0;
    this.grayScale = 0;
    this.hueRotate = 0;
    this.brightness = 1;
    this.contrast = 1;
    this.opacity = 1;
    this.blur = 0;
    this.invert = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
  }


  dropBoxUpload(): void
  {
    if (!this.filteredImgSrc)
    {
      alert('No image found!');
      return;
    }

    const img = new Image();
    img.src = this.filteredImgSrc;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      canvas.width = img.width;
      canvas.height = img.height;

      // Apply transformations
      ctx.filter = `grayscale(${this.grayScale}) sepia(${this.sepia}) hue-rotate(${this.hueRotate}deg) brightness(${this.brightness}) contrast(${this.contrast}) opacity(${this.opacity}) blur(${this.blur}px) invert(${this.invert})`;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.scale(this.scaleX, this.scaleY);
      ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'edited-image.png', { type: 'image/png' });


          const dropboxPath = `/uploads/${file.name}`;
          const reader = new FileReader();
          reader.onload = () => {
            const fileData = reader.result as ArrayBuffer;

            const headers = new HttpHeaders({
              Authorization: `Bearer sl.u.AFjGJZ8yVBjVN165OBShQNySwy9YPbQXmiIJehAlOWstTZKZoAhiRULaXHEolHlP8W21ph3WVEjFqd5YXgmfRmHuqI3AYuL6fmlA_uWX4i5rWWTdAV_rbK-m155UqB8TbH0W3djtuIazYarcK3ARUoyILb7ULNDWLAGJEnHieHHnzhpUaxDJ2UaBbbRYacEjaRnnkIKlIrD_Fl4baYWY73ZLs6ajrMkjI_3X_b-h8QcYkFdThi6G__5Abks5sfqjvnxg1k0r_-CYohWfa_HJRWX8Vdv7-MrDCeKGzHC6TfAGquc6cnNht8FNnQCm4Ml1blUwa861gi9zkgoV4RcQHXFn8w3z2oabFyfmTOizRbrVXVn4NYgtpDYT4tk-_W17eCkvPBYUqXnuL7pi6gKVQhZ_wZdEpcQ4lf2h91yA1-9SPWHPPCIdw-3q_sEgqF5Kv5eRDr7Jf16UZWik46N8VirT0WHDklf5LH_P4vKupxMyr4ETqkdOx76i7r_dDbpt7bcJKZYPHcCSFglDlktBX5lmQGCaZCTKq6vD5wNFA8uxgiO4l4AStTxl_TeERcAl0s8F9wRiXH54ICiYP56r5vtcB2OQwOHK6eMRsC7-_YEfkzwbUOxK4STIL6j7aAbPqffX2aEES3gX4AZKHgePSRhRnpSzT4BpNNrv03tzMk8Ye8nlqU5i1kC0Nhh6BL4OerCQom1jiwq8P4Lwd5L4o4jyGu31dyrvcpQeum4PH94_FcU8dPs2vWPaEH6CPomoFmEZs8pZt2C6IBK64MIHiXtE-LMAER6DmVSmdBZ_35FPCRpRia7JRHJ6Gt9ULOVlfUyJdqxXTN68xCteGMiZ72uwytlTu_p2vy3wdfqM0-SgkbaN-gtEsPxBlOU3i4f9WQqt8ny47JxUs3QQB0531-2MzH4gY7RlcPb5FWC13MV8aElUl7gBDmdoVZnKa20Z5XslpbiXenTEODCq3uAfYAlOKNhL4_OjMOZvjwOl0xQBua6QzjBo16VTrohp3wd6ZuXgfMH50s-AAMw7c9Yznso6l_3P0qvGEY_Hs7eJQZ86Mk0l5wl9zgKKn4oxHkQ4DIyfSfwcgj5_PR0gnfMtWkhAaR9os7GzhFxdq7nlLY7MFzqUEcGp9xHgPApA9el1MmiIx6YLCb865fTTH9zmTi9HCRz5lU5OohQQ1dBwxj9or09qcSynYXCWW4T0G-_25O8n4mO2dIyqk480lHCrCXQsza850bELWf480rNlXlK9atWZfU-2o3_Q_savWuViqNDJZkyWGC2GgGTcSNrGk-45ECwUZms9gkma6PRonwlWXcq9wBWc7xQUWxNEO2DUNaiPfgUOXzhA1ZHtIsDWLdYvhb-u_IYquJzg9pPm_YFlxYeTWhJJCx53IihwPDeK9-Gucwpdt9cEUYgCryuXEAV_`,
              'Dropbox-API-Arg': JSON.stringify({
                path: dropboxPath,
                mode: 'add',
                autorename: true,
                mute: false
              }),
              'Content-Type': 'application/octet-stream'
            });

            this.http.post('https://content.dropboxapi.com/2/files/upload', fileData, { headers })
              .subscribe(response => {
                alert('Upload success');
              }, error => {
                console.error('Upload error:', error);
              });
          };

          reader.readAsArrayBuffer(file);

          console.log('Converted File:', file);
        }
      }, 'image/png');
    };
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompressImageService {

  // in bytes, compress images larger than 1MB
  private fileSizeMax = 1 * 1024 * 1024;
  // in pixels, compress images have the width or height larger than 1024px
  private widthHeightMax = 1024;
  private defaultWidthHeightRatio = 1;
  private defaultQualityRatio = 0.7;

  compressImage(file: File): Observable<File>
  {
    const imageType = file.type || 'image/jpeg';
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Observable<File>((observer:any) => {
       // This event is triggered each time the reading operation is successfully completed.
       reader.onload = ev => {
        // Create an html image element
        const img = this.createImage(ev)
        // Choose the side (width or height) that longer than the other
        const imgWH = img.width > img.height ? img.width : img.height

        // Determines the ratios to compress the image
        let withHeightRatio = (imgWH > this.widthHeightMax) ? this.widthHeightMax/imgWH : this.defaultWidthHeightRatio
        let qualityRatio = (file.size > this.fileSizeMax) ? this.fileSizeMax/file.size : this.defaultQualityRatio

        // Fires immediately after the browser loads the object
        img.onload = () => {
          const elem = document.createElement('canvas')
          // resize width, height
          elem.width = img.width * withHeightRatio
          elem.height = img.height * withHeightRatio

          const ctx = <CanvasRenderingContext2D>elem.getContext('2d')
          ctx.drawImage(img, 0, 0, elem.width, elem.height)
          ctx.canvas.toBlob(
            // callback, called when blob created
            (blob:any) => {
              observer.next(new File(
                [blob],
                file.name,
                {
                  type: imageType,
                  lastModified: Date.now(),
                }
              ))
            },
            imageType,
            qualityRatio, // reduce image quantity
          )
        }
      }

      // Catch errors when reading file
      reader.onerror = error => observer.error(error)
    });
  }

  private createImage(ev:any) {
    let imageContent = ev.target.result
    const img = new Image()
    img.src = imageContent
    return img
  }
}

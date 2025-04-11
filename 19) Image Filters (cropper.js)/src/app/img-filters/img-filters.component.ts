import { Component } from '@angular/core';

@Component({
  selector: 'app-img-filters',
  templateUrl: './img-filters.component.html',
  styleUrls: ['./img-filters.component.scss']
})
export class ImgFiltersComponent {
  imageSrc: any = null;

  // Default Filter Values
  sepia: number = 0;
  grayScale: number = 0;
  hueRotate: number = 0;
  saturate: number = 1;
  brightness: number = 1;
  contrast: number = 1;
  opacity: number = 1;
  blur: number = 0;
  invert: number = 0;

  // Handle Image Upload
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = e.target?.result);
      reader.readAsDataURL(input.files[0]);
    }
  }

  rotation: number = 0;
  scaleX: number = 1; // Used for horizontal flip
  scaleY: number = 1;

  rotateImage(): void {
    this.rotation += 90;
    if (this.rotation >= 360) {
      this.rotation = 0; // Reset after full rotation
    }
  }

  // Flip Image (Horizontally or Vertically)
  flipImage(direction: 'horizontal' | 'vertical'): void {
    if (direction === 'horizontal') {
      this.scaleX *= -1; // Flip horizontally
    } else {
      this.scaleY *= -1; // Flip vertically
    }
  }

  // Reset Filters
  resetFilters(): void {
    this.sepia = 0;
    this.grayScale = 0;
    this.hueRotate = 0;
    this.saturate = 1;
    this.brightness = 1;
    this.contrast = 1;
    this.opacity = 1;
    this.blur = 0;
    this.invert = 0;

    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
  }

}

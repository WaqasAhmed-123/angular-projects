import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CompressImageService } from './compress-image-service.service';

@Component({
  selector: 'app-img-resize',
  templateUrl: './img-resize.component.html',
  styleUrls: ['./img-resize.component.scss']
})
export class ImgResizeComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  originalImage: File | null = null;
  originalImageUrl = "";
  originalImageSize = "";

  compressedImage: File | null = null;
  compressedImageUrl = "";
  compressedImageSize = "";

  isLoading = false;
  compressionRate = "";

  constructor(private compressImageService: CompressImageService, private cd: ChangeDetectorRef) {}

  onFileSelected(event: Event)
  {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.originalImage = input.files[0];
      this.originalImageSize = this.formatFileSize(this.originalImage.size);
      this.originalImageUrl = URL.createObjectURL(this.originalImage);
    }
    else
      this.clearImages();
  }

  compressImage(): void {
    if (!this.originalImage) return;

    this.isLoading = true;
    this.cd.detectChanges();

    this.compressImageService.compressImage(this.originalImage).subscribe({
      next: (compressedFile: File) => {
        this.compressedImage = compressedFile;
        this.compressedImageSize = this.formatFileSize(this.compressedImage.size);
        this.compressedImageUrl = URL.createObjectURL(this.compressedImage);

        // Calculate Compression Rate
        this.getCompressRate(this.compressedImage.size);

        this.isLoading = false;
        this.cd.detectChanges();
      },
      error: (error) => {
        console.error('Compression error:', error);
        this.isLoading = false;
        this.cd.detectChanges();
      },
    });
  }

  downloadCompressedImage(): void {
    if (!this.compressedImageUrl) return;

    const a = document.createElement('a');
    a.href = this.compressedImageUrl;
    a.download = this.compressedImage?.name || 'compressed-image.jpg';
    a.click();
  }

  clearImages()
  {
    this.fileInput.nativeElement.value = '';
    this.isLoading = false;

    this.originalImage = null;
    this.originalImageUrl = "";
    this.originalImageSize = "";

    this.compressedImage = null;
    this.compressedImageUrl = "";
    this.compressedImageSize = "";

    this.cd.detectChanges();
  }

  private formatFileSize(size: number): string {
    if (size >= 1024 * 1024) {
      return (size / (1024 * 1024)).toFixed(2) + ' MB';
    }
    return (size / 1024).toFixed(2) + ' KB';
  }

  private getCompressRate(size: number)
  {
    const originalSizeBytes = this.originalImage!.size;
    const compressionPercent = ((1 - size / originalSizeBytes) * 100).toFixed(2);
    if(+compressionPercent > 0)
      this.compressionRate = `${compressionPercent}% Compressed`;
    else
      this.compressionRate = `${Math.abs(+compressionPercent)}% Enhanced`;
  }
}

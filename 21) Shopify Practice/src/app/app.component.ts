import { Component } from '@angular/core';
import { ShopifyService } from './services/shopifyService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = false;

  storeType = 1;
  totalProducts = 0;
  pageSize = 15;
  products: any = [];
  nextInfo = "";
  previousInfo = "";

  currentPage = 1;
  totalPages = 0;

  selectedProduct:any = null;
  activeImage = "";
  isModalOpen = false;

  constructor(private shopifyService: ShopifyService) {}

  ngOnInit(): void {
    this.getProductCount();
  }

  switchStore()
  {
    this.nextInfo = "";
    this.previousInfo = "";
    this.currentPage = 1;
    this.pageSize = 15;

    this.getProductCount();
  }

  getProductCount()
  {
    this.isLoading = true;
    this.shopifyService.getProductCount(this.storeType)
    .subscribe((res:any)=>{
      this.totalProducts = res?.count|0;
    }).add(()=>{
      this.isLoading = false;
      this.getProducts();
    });
  }

  getProducts(pageInfo:string = "") {
    this.isLoading = true;

    this.shopifyService.getProductList(this.storeType, this.pageSize, pageInfo).subscribe(
      (data: any) => {
        var tempData = JSON.parse(data?.products);
        this.products = tempData?.products;
        this.nextInfo = data?.pagination?.next;
        this.previousInfo = data?.pagination?.previous;

        this.totalPages = Math.ceil(this.totalProducts/this.pageSize);
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    ).add(()=>{
      this.isLoading = false;
    });
  }

  //#region Pagination
  changePageSize()
  {
    this.nextInfo = "";
    this.previousInfo = "";
    this.currentPage = 1;

    this.getProducts();
  }

  goNext()
  {
    this.currentPage = this.currentPage+1;
    this.getProducts(this.nextInfo);
  }

  goPrevious()
  {
    this.currentPage = this.currentPage-1;
    this.getProducts(this.previousInfo);
  }
  //#endregion


  //#region Product details modal
  openModal(product: any) {
    this.selectedProduct = product;
    this.activeImage = product.image?.src || 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';
    this.isModalOpen = true;
  }

  changeImage(imageSrc: string): void {
    this.activeImage = imageSrc;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  deleteProduct()
  {
    if (confirm("Confirm Delete!") == true)
    {
      this.isLoading = true;
      this.closeModal();
      this.shopifyService.deleteProduct(this.storeType, this.selectedProduct?.id)
      .subscribe((res: any)=>{
        alert('Product deleted!');

        this.nextInfo = "";
        this.previousInfo = "";
        this.currentPage = 1;
        this.getProductCount();
      }).add(()=>{
        this.isLoading = false;
      });
    }
  }

  addProduct()
  {
    var tempStore = this.storeType === 1 ? 2 : 1;
    if (confirm(`Upload this Product into Store ${tempStore}`) == true)
    {
      this.isLoading = true;
      this.closeModal();
      this.shopifyService.addProduct(tempStore, {'product':this.selectedProduct})
      .subscribe((res:any)=>{
        alert("Product uploaded!");
      }).add(()=>{
        this.isLoading = false;
      })
    }
  }
  //#endregion

}

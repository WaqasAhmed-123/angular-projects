import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  private apiBaseUrl = 'https://localhost:7122/api/Shopify';

  constructor(private http: HttpClient) { }

  getProductCount(storeType:number): any {
    return this.http.get(`${this.apiBaseUrl}/product_count?storeType=${storeType}`);
  }

  getProductList(storeType:number, limit:number = 15, pageInfo:string = ""): any {
    let url = `${this.apiBaseUrl}/product_list?storeType=${storeType}&limit=${limit}`;
    if (pageInfo) {
      url += `&pageInfo=${encodeURIComponent(pageInfo)}`;
    }
    return this.http.get<any>(url);
  }

  getProductById(storeType:number, id:string): any {
    return this.http.get(`${this.apiBaseUrl}/product_by_id?storeType=${storeType}&id=${id}`);
  }

  addProduct(storeType:number, product:any):any{
    return this.http.post<any>(`${this.apiBaseUrl}/add_product?storeType=${storeType}`, product);
  }

  deleteProduct(storeType:number, id: string): any {
    return this.http.delete<any>(`${this.apiBaseUrl}/delete_product?storeType=${storeType}&id=${id}`);
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  apiURL = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiURL);
  }
   getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiURL}/${id}`);
  }
}



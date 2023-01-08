import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';

import { Product, ProductDTO, UpdateProductDto } from './../models/product.model';
import { catchError, retry, retryWhen, map } from "rxjs/operators";
import { environment } from './../../environments/environment'
import { throwError, zip } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private apiUrl = "/api/products";
  private apiUrl = `${environment.API_URL}/api/products`

  constructor(
    private http: HttpClient
  ) {
  }

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    // return this.http.get<Product[]>('https://fakestoreapi.com/products');
    return this.http.get<Product[]>(this.apiUrl, {params})
      .pipe(
        retry(3),
        map(products => products.map(item => {
          return {
            ...item,
            taxes: 0.19 * item.price
          }
        }))
      );
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Conflict) {
            return throwError('Algo esta mal en el server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('El producto no existe');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            return throwError('no esta Permitido')
          }
          return throwError('Ups algo salio mal');
        })
      );
  }

  getProductByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(this.apiUrl, {
      params: {limit, offset}
    });
  }

  fetchReadAndUpdate(id: string, dto: UpdateProductDto) {
    return zip(
      this.getProduct(id),
      this.update(id, {title: 'nuevo zip'})
    );
  }

  create(dto: ProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: string, dto: UpdateProductDto) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProduitService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/produits";

  getProducts(categoryId): Observable<Product[]> {
    let newPAth = this.path;
    if (categoryId) {
      newPAth += "?categoryId=" + categoryId
    }
    return this.http.get<Product[]>(newPAth).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Un probléme a été rencontré " + err.error.message;
    } else {
      errorMessage = "Le système a rencontré une erreur"
    }
    return throwError(errorMessage);
  }
}

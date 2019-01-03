import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _dbUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'

  constructor(private _http: HttpClient) { }

  getBooks(): Observable<Product[]> {
    return this._http.get<Product[]>(this._dbUrl)
  }

  // makeBook(book: Product) : Observable<Product[]> {
  //   return this._http.post<Product[]>(this._dbUrl, product, httpOptions)
  // }
}



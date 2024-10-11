import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../Data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:Products){
    console.log("service called")
   return this.http.post('http://localhost:3000/product',data);
  }
}

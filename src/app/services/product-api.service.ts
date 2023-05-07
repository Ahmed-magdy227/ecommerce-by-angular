// import { Iproducts } from './../models/iproducts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Iproducts } from '../models/iproducts';
// day6
@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  // day7///////////////////////////////////////////////////////////////////////////////////////////7777777777777777
private httpOpptions={};


// inject
  constructor(private HttpClient:HttpClient) {
    this.httpOpptions={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
  }
  //get all
getAllProducts():Observable<Iproducts[]>{
// return this.HttpClient.get<Iproducts[]>('localhost:3000/products')
return this.HttpClient.get<Iproducts[]>(`${environment.ABIBaseUrl}/products`)
}
////get product by catid
grtProductByCategoeyID(categoryid:number):Observable<Iproducts[]>{
return this.HttpClient.get<Iproducts[]>(`${environment.ABIBaseUrl}/products?catID=${categoryid}`)
}
////get product by id
grtProductByID(prdid:number):Observable<Iproducts>{
  return this.HttpClient.get<Iproducts>(`${environment.ABIBaseUrl}/products=${prdid}`)
}

///////////add product day777777777777777////////////////////////
addNewProduct(product:Iproducts):Observable<Iproducts>{
  return this.HttpClient.post<Iproducts>(`${environment.ABIBaseUrl}/products`,JSON.stringify(product),this.httpOpptions )
  }

}

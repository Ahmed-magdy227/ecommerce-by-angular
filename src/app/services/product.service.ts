import { Injectable } from '@angular/core';
import { Iproducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList:Iproducts[];


  constructor() {
    this.productList=[{id:7,name:"samsung",price:3500,quantity:1,catID:1,imgUrl:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
  {id:22,name:"iphone",price:4500,quantity:12,catID:1,imgUrl:"https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-550,w-0,c-at_max"},
  {id:1,name:"dell",price:20000,quantity:0,catID:2,imgUrl:"https://m.media-amazon.com/images/I/61O-v9q-VwL._AC_SX679_.jpg"},
  {id:5,name:"dell",price:20000,quantity:11,catID:2,imgUrl:"https://m.media-amazon.com/images/I/61O-v9q-VwL._AC_SX679_.jpg"},
  {id:4,name:"lg",price:2000,quantity:8,catID:3,imgUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT56XcBObv3ht6uS3dLFYt4n74OhGBoIn65MSg15Yj0L_bb9pZnM1aE3FFo-CwpPzJ_GqnlZHyskw&usqp=CAc"},
  {id:9,name:"lg",price:2000,quantity:6,catID:3,imgUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT56XcBObv3ht6uS3dLFYt4n74OhGBoIn65MSg15Yj0L_bb9pZnM1aE3FFo-CwpPzJ_GqnlZHyskw&usqp=CAc"},
]
  }

getAllProducts():Iproducts[]{
return this.productList
}

getProductsByCatId(catID:number):Iproducts[]{
if(catID ==0){
  return this.getAllProducts()
}else{
  return this.productList.filter(prod=>prod.catID==catID)
}
}
///get product by id

getProductByID(prdID:number):Iproducts|undefined{
  return this.productList.find(prd=>prd.id==prdID)
}


getProductListID():number[]{
  return this.productList.map(prd=>prd.id)
}

//search by product name
searchByPproductName(prdName:string):Iproducts|undefined
{
return this.productList.find(prd=>prd.name==prdName)
}
}

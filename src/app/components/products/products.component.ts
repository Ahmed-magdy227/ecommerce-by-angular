import { style } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproducts } from 'src/app/models/iproducts';
import { ProductApiService } from 'src/app/services/product-api.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit ,OnChanges{
// array of objects
// productList:Iproducts[];
// day3
@Input()recievedID:number=0
prdListOfCat:Iproducts[]=[]
orderTotal:number=0
myDate :Date=new Date
// category id 1 (mobile)   category   id   2(labtob)    category   id   3(tv) tv 4
 @Output()totalPriceChanged:EventEmitter<number>
 //inject inside constractor

constructor( private productService:ProductService ,private router:Router,private ProductApiService:ProductApiService){
  this.totalPriceChanged=new EventEmitter<number>()
//   this.productList=[{id:1,name:"samsung",price:3500,quantity:1,catID:1,imgUrl:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"},
//   {id:22,name:"iphone",price:4500,quantity:12,catID:1,imgUrl:"https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-550,w-0,c-at_max"},
//   {id:4,name:"dell",price:20000,quantity:0,catID:2,imgUrl:"https://m.media-amazon.com/images/I/61O-v9q-VwL._AC_SX679_.jpg"},
//   {id:4,name:"dell",price:20000,quantity:11,catID:2,imgUrl:"https://m.media-amazon.com/images/I/61O-v9q-VwL._AC_SX679_.jpg"},
//   {id:4,name:"lg",price:2000,quantity:8,catID:3,imgUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT56XcBObv3ht6uS3dLFYt4n74OhGBoIn65MSg15Yj0L_bb9pZnM1aE3FFo-CwpPzJ_GqnlZHyskw&usqp=CAc"},
//   {id:4,name:"lg",price:2000,quantity:6,catID:3,imgUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT56XcBObv3ht6uS3dLFYt4n74OhGBoIn65MSg15Yj0L_bb9pZnM1aE3FFo-CwpPzJ_GqnlZHyskw&usqp=CAc"},
// ]
}
  ngOnChanges(): void {
// this.getProductsOfCat();
//  this.prdListOfCat= this.productService.getProductsByCatId(this.recievedID)
//  day6
if(this.recievedID==0){
this.ProductApiService.getAllProducts().subscribe(data=>{
  this.prdListOfCat=data
})
}else{
  this.ProductApiService.grtProductByCategoeyID(this.recievedID).subscribe(data=>{
    this.prdListOfCat=data
  })
}

  }
  ngOnInit(): void {
  //  this.getProductsOfCat();

  // day7////////////////////////
  this.ProductApiService.getAllProducts().subscribe(data=>{
    this.prdListOfCat=data
  })
  }

// private getProductsOfCat(): void{
//   if(this.recievedID==0){
//     this.prdListOfCat=Array.from(this.productList)
//     return;
//   }
//   this.prdListOfCat=this.productList.filter((prod)=>prod.catID==this.recievedID)
// }
updateTotlaPrice(prodPrice:number,itemsCount:any){
 this.orderTotal+= prodPrice*parseInt(itemsCount)
//  this.orderTotal= prodPrice*number(itemsCount)
this.totalPriceChanged.emit(this.orderTotal)
// if(this. productList[2].quantity==0){
//   this. productList[5].imgUrl
// }


}
showDetails (prdID:Number){
  this.router.navigate(["details",prdID])
}
}
function newdate(): Date {
  throw new Error('Function not implemented.');
}


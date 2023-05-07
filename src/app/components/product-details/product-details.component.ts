import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from 'src/app/models/iproducts';
import { ProductService } from 'src/app/services/product.service';

import { Location} from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
prd:Iproducts|undefined= undefined
// day5
prdIDlist:number[]=[];
currentproductID:number=0;
currentIndex:number=0;



constructor(private activatedRoutrs:ActivatedRoute,private prdService:ProductService,private location:Location,
  private router:Router){



}
  ngOnInit(): void {


    // day5

    this.prdIDlist=this.prdService.getProductListID()

this.activatedRoutrs.paramMap.subscribe(paramMap=>{
  this.currentproductID=paramMap.get("pid")?Number(paramMap.get("pid")):0
  let foundPrd=this.prdService.getProductByID(this.currentproductID)
  if(foundPrd){
  this.prd =foundPrd
}else{
  alert("product not found")
this.location.back()
}
})
  }
  nextFun(){
    this.currentIndex= this.prdIDlist.findIndex((item)=>item==this.currentproductID)
    // console.log(this.currentIndex);
    this.router.navigate(["details",this.prdIDlist[++this.currentIndex]])

  }
previosFun(){
  this.currentIndex= this.prdIDlist.findIndex((item)=>item==this.currentproductID)
  // console.log(this.currentIndex);
  this.router.navigate(["details",this.prdIDlist[--this.currentIndex]])
}


searchBYprd(prdName:string){
let result= this.prdService.searchByPproductName(prdName);
if(result){
  this.prd=result

}else{
  alert("not found")
}
}

}


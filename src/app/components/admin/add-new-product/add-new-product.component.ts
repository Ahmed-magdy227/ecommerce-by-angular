import { Component } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Iproducts } from 'src/app/models/iproducts';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  prd:Iproducts ={} as Iproducts;
  catList:Icategory[]
  constructor(private ProductApiService:ProductApiService,private router:Router){
this.catList=[

  {id:1,name:"mobile"},
  {id:2,name:"labtop"},
  {id:3,name:"tv"}
 ];
}

addNewPrd(){
  // let prd:Iproducts={
  //   id:5,
  //   name:"new mobile",
  //   quantity:4,
  //   price:5555,
  //   catID:1,
  //  imgUrl:"https://images-eu.ssl-images-amazon.com/images/I/61RUbqTd7UL._AC_UL160_SR160,160_.jpg"
  // };
  // this.ProductApiService.addNewProduct(prd).subscribe({
  //   next:(prd)=>{
  //     console.log(prd)
  //     this.router.navigate(['/products'])
  //   },
  //   error:(err)=>{
  //     console.log(err);

  //   }
  // })
  this.ProductApiService.addNewProduct(this.prd).subscribe({
    next:(prd)=>{
      console.log(prd)
      this.router.navigate(['/products'])
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

}

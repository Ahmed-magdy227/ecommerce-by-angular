import { Component } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
catList:Icategory[]
selectedCatID:number=0;
recevedTotalPrice:number=0
constructor(){
  this.catList=[



   {id:1,name:"mobile"},
   {id:2,name:"labtop"},
   {id:3,name:"tv"}
  ]
}
totalInParentFun(total:number){
 this.recevedTotalPrice=total
}
}

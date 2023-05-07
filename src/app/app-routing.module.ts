import { AddNewProductComponent } from './components/admin/add-new-product/add-new-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

 //day4
 //array of objects
const routes: Routes = [
//firts match win
// {path:'',redirectTo:"/home",pathMatch:"full"}, //default path  //بيكمل على path الاساسى
// {path:"home",component:HomeComponent,title:"home"},
// {path:"products",component:ProductsComponent,title:"products"},
// {path:"order",component:OrderComponent,title:"order"},
// {path:'**',component:NotFoundComponent} //not found path //wild card path

{path:"",component:MainLayoutComponent,children:[
  {path:'',redirectTo:"/home",pathMatch:"full"}, //default path  //بيكمل على path الاساسى
{path:"home",component:HomeComponent,title:"home"},
{path:"products",component:ProductsComponent,title:"products"},
{path:"order",component:OrderComponent,title:"order"},
{path:"details",component:ProductDetailsComponent,title:"productDetails"},
{path:"details/:pid",component:ProductDetailsComponent,title:"productDetails"},
{path:"newProduct",component:AddNewProductComponent,title:"newProduct"}


]}
,
{path:'login',component:UserLoginComponent},
{path:'logOut',component:UserLoginComponent},
{path:'register',component:UserRegisterComponent},
{path:'**',component:NotFoundComponent}, //not found path //wild card path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

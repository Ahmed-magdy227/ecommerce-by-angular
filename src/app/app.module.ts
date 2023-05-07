import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BorderBoxDirective } from './directives/border-box.directive';


import { BorderPoxDirective } from './border-pox.directive';
import { UsdTegpPipe } from './pipes/usd-tegp.pipe';
import { DateBirthPipe } from './pipes/date-birth.pipe';
import { HttpClientModule }  from '@angular/common/http';
import { AddNewProductComponent } from './components/admin/add-new-product/add-new-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    OrderComponent,
    NotFoundComponent,

    MainLayoutComponent,
     ProductDetailsComponent,
     BorderBoxDirective,


     BorderPoxDirective,
       UsdTegpPipe,
       DateBirthPipe,
       AddNewProductComponent,
       UserRegisterComponent,
       UserLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

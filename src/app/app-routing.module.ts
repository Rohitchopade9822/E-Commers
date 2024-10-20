import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { OrderConComponent } from './order-con/order-con.component';

const routes: Routes = [
  {
  path:'',component:HomeComponent

  },
  {
    path:'seller',
    component:SellerComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
     canActivate:[AuthGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddProductComponent,
    canActivate:[AuthGuard]
  },
  {
    
    path:'seller-Update-product/:id',
    component:SellerUpdateProductComponent,
    
  },
  {
    path:'order-confirm',
    component:OrderConComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

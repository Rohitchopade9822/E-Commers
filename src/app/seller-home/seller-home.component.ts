import { Component, OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import { Route, Router } from '@angular/router';
import { Products, SignUp } from '../Data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit  {

  produnctlist:undefined |Products[]
  productMessage:undefined |string;
  constructor(private product:ProductService){}

  ngOnInit(): void {
   

    this.product.productlist().subscribe((result)=>{

      console.log(result)
      this.produnctlist=result;
    })
  }
  DeleteProductId(id:string){
   
   console.warn("test id id",id)
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result)
      {
        this.productMessage="product is deleted"
        this.reloadProductList();
      }
    })  
    setTimeout(() => {
      this.productMessage=undefined
    }, 3000);
        
  }
  reloadProductList() {
    this.product.productlist().subscribe((result) => {
        this.produnctlist = result;
    });
}
}

 





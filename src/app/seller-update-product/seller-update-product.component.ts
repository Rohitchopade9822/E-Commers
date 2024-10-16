import { Component, OnInit } from '@angular/core';
import { Products } from '../Data-type';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productdata :undefined | Products
    constructor(private rout:ActivatedRoute,private product:ProductService) {}
  ngOnInit(): void {

    let productid= this.rout.snapshot.paramMap.get('id')
    productid && this.product.getProductById(productid).subscribe((data)=>{

      console.warn(data);
      this.productdata=data

    })
   
  }
  Submit(data:any){

  }

}

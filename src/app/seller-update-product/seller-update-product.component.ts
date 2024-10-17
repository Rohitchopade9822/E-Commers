import { Component, OnInit } from '@angular/core';
import { Products } from '../Data-type';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productdata: undefined | Products
  productmesg: undefined | string
  constructor(private rout: ActivatedRoute, private product: ProductService,private router:Router) { }
  ngOnInit(): void {

    let productid = this.rout.snapshot.paramMap.get('id')
    productid && this.product.getProductById(productid).subscribe((data) => {

      console.warn(data);
      this.productdata = data

    })

  }
  Submit(data: Products) {
    if (this.productdata) {
      data.id = this.productdata.id
    }
    this.product.Updateproduct(data).subscribe((result) => {
      if (result) {
        this.productmesg = "Product upadated Successfully";
       
      }
    });
    setTimeout(() => {
      this.productmesg = undefined
      this.router.navigate(['/seller-home']);
      
    }, 3000)

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Products } from '../Data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addproductmessage:string|undefined;
  constructor(private product:ProductService, private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  Submit(data:Products){
        console.warn(data);
        this.product.addProduct(data).subscribe((result)=>{

          console.warn(result);
          if(result){
            this.addproductmessage="Product added Successfuly"
          }
          setTimeout(() => {
            this.router.navigate(['/seller-home']);
          }, 3000);
          
        })
        
  }


}

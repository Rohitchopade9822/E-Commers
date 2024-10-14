import { Component, OnInit } from '@angular/core';
import { Products } from '../Data-type';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  constructor(private product:ProductService, private router:Router) {}
  ngOnInit(): void {
   
  }
  Submit(data:Products){
    console.warn(data);
    this.product.addProduct(data).subscribe((result)=>{

      console.warn(result);
      if(result){
       
      }
      setTimeout(() => {
        this.router.navigate(['/seller-Update-product']);
      }, 3000);
      
    })
    
}

}

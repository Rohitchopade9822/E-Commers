import { Component } from '@angular/core';
import { SellService } from '../services/sell.service';
import { SellerHomeComponent } from '../seller-home/seller-home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  constructor(private sell:SellService, private router:Router){}
  ngonInit():void{}
  SignUp(data:object):void{
  
    this.sell.userSignUp(data).subscribe((result)=>{

    if(result)
    {
      
      this.router.navigate(['seller-home'])
    }
    });

  }
}

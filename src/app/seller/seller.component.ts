import { Component, OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import { SellerHomeComponent } from '../seller-home/seller-home.component';
import { Router } from '@angular/router';
import { SignUp } from '../Data-type';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private sell:SellService, private router:Router){}

  showlogin=false;
  ngOnInit(): void {
    this.sell.reloadseller()
    throw new Error('Method not implemented.');
  }
  ngonInit():void{}
  SignUp(data:SignUp):void{
    
    this.sell.userSignUp(data)

  }
  openlogin(){

  }
}

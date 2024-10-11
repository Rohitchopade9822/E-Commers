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
  constructor(private product:ProductService){}

  ngOnInit(): void {
   

    this.product.productlist().subscribe((result)=>{

      console.log(result)
      this.produnctlist=result;
    })
  }

 
   
 }





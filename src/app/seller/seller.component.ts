import { Component, OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import { Router } from '@angular/router';


@Component({

  selector: 'app-seller',

  templateUrl: './seller.component.html',

  styleUrls: ['./seller.component.css']

})
export class SellerComponent implements OnInit {

  constructor(private seller:SellService, private router:Router){}

  showLogin = false;
    usererror:string="";

  ngOnInit(): void {
    this.seller.reloadseller()
    throw new Error('Method not implemented.');
  }
  ngonInit():void{}
 
  SignUp(data: any): void {
    
    this.seller.userSignUp(data);

  }
  Login(data: any): void {

   this.seller.SellerLogin(data)
   this.seller.isloginerror.subscribe((iserror)=>{
         if(iserror){
           
          this.usererror="email or password is not correct"
         }
   })

  }

  toggleLogin(): void {

    this.showLogin = !this.showLogin;

  }
  
  
}

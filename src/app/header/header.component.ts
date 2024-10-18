import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  menutype:string="default";

  sellername:string='';

  constructor(private route:Router){

  }
  ngOnInit():void{
        
    this.route.events.subscribe((val:any)=> { 
     
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
            
          console.warn("in seller area")
           this.menutype="seller"
           if(localStorage.getItem('seller')){
            let sellerstore=localStorage.getItem('seller');
            let sellerdata=sellerstore && JSON.parse(sellerstore)[0];
            this.sellername=sellerdata.name
           }
        }
        if(localStorage.getItem('order-con') && val.url.includes('order-con')){
             console.warn("order_Called")
          if(localStorage.getItem('order-con')){
            let odersave=localStorage.getItem('order-con');
            let orderdata=odersave && JSON.parse(odersave)[0];
          }
        }
      
        else{

          console.warn("out side of seller area")
           this.menutype="default"
          
        }
      }
    })
  }
  logout(){

    localStorage.removeItem('seller');
    this.route.navigate(['/'])

  }
}

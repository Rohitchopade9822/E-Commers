import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignUp } from '../Data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  isSellerLoggedin = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private route: Router) {
  }
  userSignUp(data: SignUp) {

    this.http.post('http://localhost:3000/seller', data, {
      observe: 'response'
    }
    ).subscribe((result) => {
      this.isSellerLoggedin.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.route.navigate(['seller-home'])
      console.log("result", result);
    })
      
      
  }
  reloadseller(){

  if(localStorage.getItem('seller'))
    this.isSellerLoggedin.next(true);
  this.route.navigate(['seller-home'])  
  }
}

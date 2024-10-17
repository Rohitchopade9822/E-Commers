import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../Data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
 
  Popularproduct:  Products[] = []; 

  constructor(private service:ProductService){}
  ngOnInit(): void {
    this.service.Popular_product().subscribe((data:Products[]) => {
      this.Popularproduct = data;
    });

  }
 
}

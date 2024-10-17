import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  images = [944, 184, 684].map((n) => `https://picsum.photos/id/${n}/1400/600`);
}

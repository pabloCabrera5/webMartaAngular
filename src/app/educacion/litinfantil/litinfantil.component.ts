import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litinfantil',
  templateUrl: './litinfantil.component.html',
  styleUrls: ['./litinfantil.component.scss']
})
export class LitinfantilComponent implements OnInit {

  constructor() { }

  imagesSources = [];
  imagesCarousel = [];
  ngOnInit() {
    for (let i = 1; i < 19; i++) {
      this.imagesSources.push(`../../../assets/litinfantil/grid/foto${i}.PNG`);
    }
    for (let i = 1; i < 7; i++) {
      this.imagesCarousel.push(`../../../assets/litinfantil/carousel/foto${i}.PNG`);
    }
  }

  // function to get a specific # of picture in the array 
  imagesSource(start: number, end: number) {
    return this.imagesSources.slice(start, end)
  }



}

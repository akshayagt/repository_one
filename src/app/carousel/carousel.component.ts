import { Component, OnInit } from '@angular/core';

import { CarouselService } from '../carousel.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {
src1={};
src2={};
src3={};

src4=[];
  constructor(private ob:CarouselService) { }


  ngOnInit() {

this.src1=this.ob.src1;
this.src2=this.ob.src2;
this.src3=this.ob.src3;

this.src4=this.ob.src4;
  }

}

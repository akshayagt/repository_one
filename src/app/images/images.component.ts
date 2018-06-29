import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent  {

src1=[];
  constructor(private ds:DataService) { }



  ngOnInit() {

this.src1=this.ds.src1;

  }

}

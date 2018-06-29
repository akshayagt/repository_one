import { Component, OnInit } from '@angular/core';

import { LeftService } from '../left.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent   {

pgl1={
		image:"",
		text:"",
		text1:"",
		button1:""
	};
	pgl2={
		image:"",
		text:"",
		text1:"",
		button1:""
	};
pgl3={
		image:"",
		text:"",
		text1:"",
		button1:""
	};

pgl4={  
    text:"",
    text1:"" 
  };
  pgl5={    
    text:"",
    text1:""
    
  };
  pgl6={
    text:"",
    text1:""
  };

  constructor(private ob:LeftService) { }

  ngOnInit() {

  	this.pgl1.image=this.ob.pgl1.image;
  	this.pgl1.text=this.ob.pgl1.text;
  	this.pgl1.text1=this.ob.pgl1.text1;
  	this.pgl1.button1=this.ob.pgl1.button1;
  	this.pgl2.image=this.ob.pgl2.image;
  	this.pgl2.text=this.ob.pgl2.text;
  	this.pgl2.text1=this.ob.pgl2.text1;
  	this.pgl2.button1=this.ob.pgl2.button1;
  	this.pgl3.image=this.ob.pgl3.image;
  	this.pgl3.text=this.ob.pgl3.text;
  	this.pgl3.text1=this.ob.pgl3.text1;
  	this.pgl3.button1=this.ob.pgl3.button1;

    this.pgl4.text=this.ob.pgl4.text;
    this.pgl4.text1=this.ob.pgl4.text1;
    this.pgl5.text=this.ob.pgl5.text;
    this.pgl5.text1=this.ob.pgl5.text1;
    this.pgl6.text=this.ob.pgl6.text;
    this.pgl6.text1=this.ob.pgl6.text1;

  }

}

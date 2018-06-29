import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ImagesComponent } from './images/images.component';
import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';


import { DataService } from './data.service';
import { LeftService } from './left.service';
import { RightService } from './right.service';
import { CarouselComponent } from './carousel/carousel.component';

import { CarouselService } from './carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImagesComponent,
    TextComponent,
    VideoComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService,LeftService,RightService,CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }

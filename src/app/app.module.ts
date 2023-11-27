import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    MainContentComponent,
     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       // other imports
       RouterModule.forRoot([
        { path: 'videos', component: VideosComponent }, // replace 'VideosComponent' with your actual component
        // other route configurations
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

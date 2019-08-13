import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { ContactComponent } from './contact/contact.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ForthPageComponent } from './forth-page/forth-page.component';

import {MypipePipe} from'./mypipe.pipe';


/*GET API*/
import { HttpClientModule } from '@angular/common/http'

/*POST API*/
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PipessComponent } from './pipess/pipess.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareerComponent,
    GalleryComponent,
    GetApiComponent,
    PostApiComponent,
    ContactComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ForthPageComponent,
    PipessComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*GET API*/
    HttpClientModule,
    /*POST API*/
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

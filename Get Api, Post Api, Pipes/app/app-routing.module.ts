import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { PipessComponent } from './pipess/pipess.component';
import { ContactComponent } from './contact/contact.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ForthPageComponent } from './forth-page/forth-page.component';


const routes: Routes = [
  {path:'home',component:HomeComponent,},
  {path:'about',component:AboutComponent},
  {path:'career',component:CareerComponent},
  {path:'gallery',component:GalleryComponent,

children:[
  {path:'first-page',component:FirstPageComponent},
  {path:'second-page',component:SecondPageComponent},
  {path:'third-page',component:ThirdPageComponent},
  {path:'forth-page',component:ForthPageComponent}
]

},
  {path:'get-api',component:GetApiComponent},
  {path:'post-api',component:PostApiComponent},
  {path:'pipess',component:PipessComponent},
  {path:'contact',component:ContactComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePagerComponent } from './home-pager/home-pager.component';
import { HomePagerHeaderComponent } from './home-pager/home-pager-header/home-pager-header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
import { ProfileElementComponent } from './profile/profile-element/profile-element.component';
import { HomePagePostComponent } from './home-pager/home-page-post/home-page-post.component';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    HomePagerComponent,
    HomePagerHeaderComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileElementComponent,
    HomePagePostComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarofflineComponent } from './navbaroffline/navbaroffline.component';
import { NavbaronlineComponent } from './navbaronline/navbaronline.component';
import { RankingComponent } from './ranking/ranking.component';
import { HttpClientModule } from '@angular/common/http';
import { AddwebsiteComponent } from './addwebsite/addwebsite.component';
import { RedirectComponent } from './redirect/redirect.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarofflineComponent,
    NavbaronlineComponent,
    RankingComponent,
    AddwebsiteComponent,
    RedirectComponent,
    PagenotfoundComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

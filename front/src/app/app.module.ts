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
import { WebsitesComponent } from './websites/websites.component';
import { ProfilComponent } from './profil/profil.component';
import { PaymentComponent } from './payment/payment.component';
import { UrlPipe } from './url.pipe';
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
    LoginComponent,
    WebsitesComponent,
    ProfilComponent,
    PaymentComponent,
    UrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [
    UrlPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

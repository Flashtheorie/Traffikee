import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NgxStripeModule } from 'ngx-stripe';
import { UrlPipe } from './url.pipe';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ErrorComponent } from './error/error.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentsuccessredirectComponent } from './paymentsuccessredirect/paymentsuccessredirect.component';
import { AdminComponent } from './admin/admin.component';
import { NgChartsModule } from 'ng2-charts';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminwebsitesComponent } from './adminwebsites/adminwebsites.component';
import { PaymentsuccessredirectcentComponent } from './paymentsuccessredirectcent/paymentsuccessredirectcent.component';
import { PaymentsuccessredirectmilleComponent } from './paymentsuccessredirectmille/paymentsuccessredirectmille.component';
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
    
    UrlPipe,
     SplashScreenComponent,
     ErrorComponent,
     CheckoutComponent,
     PaymentsuccessComponent,
     PaymentsuccessredirectComponent,
     AdminComponent,
     AdminusersComponent,
     AdminwebsitesComponent,
     PaymentsuccessredirectcentComponent,
     PaymentsuccessredirectmilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxStripeModule.forRoot('pk_test_51L3TjKFkiBiEQqb0Aheqhc12TjQVNlMrj7DlZnRxx008J2PSqjvrqzIOrHIMr5N6YaU1BehQIikijwzOYplf737r00ZGkrz2y6'),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

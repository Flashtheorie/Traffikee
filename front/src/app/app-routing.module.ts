import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddwebsiteComponent } from './addwebsite/addwebsite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfilComponent } from './profil/profil.component';
import { RedirectComponent } from './redirect/redirect.component';
import { RegisterComponent } from './register/register.component';
import { WebsitesComponent } from './websites/websites.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'addwebsite', component: AddwebsiteComponent, canActivate: [AuthGuard]},
  { path: 'redirect/:url', component: RedirectComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'websites', component: WebsitesComponent, canActivate: [AuthGuard]},
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'paymentsuccess', component: PaymentsuccessComponent},



  
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddwebsiteComponent } from './addwebsite/addwebsite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfilComponent } from './profil/profil.component';
import { RedirectComponent } from './redirect/redirect.component';
import { RegisterComponent } from './register/register.component';
import { WebsitesComponent } from './websites/websites.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'addwebsite', component: AddwebsiteComponent},
  { path: 'redirect/:url', component: RedirectComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'websites', component: WebsitesComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'payment', component: PaymentComponent},

  { path: '**', pathMatch: 'full', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

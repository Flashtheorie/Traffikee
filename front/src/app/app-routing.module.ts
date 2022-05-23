import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddwebsiteComponent } from './addwebsite/addwebsite.component';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'addwebsite', component: AddwebsiteComponent},
  { path: 'redirect/:url', component: RedirectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

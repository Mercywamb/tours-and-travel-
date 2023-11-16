import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { NavComponent } from './nav/nav.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'activities', component: ActivitiesComponent },
 
  {path: 'tours', component:ToursComponent},
  {path: 'nav', component:NavComponent},
  {path: 'review', component:ReviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
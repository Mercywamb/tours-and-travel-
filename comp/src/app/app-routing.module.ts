import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'hotels', component: HotelsComponent },
  {path: 'tours', component:ToursComponent},
  {path: 'nav', component:NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
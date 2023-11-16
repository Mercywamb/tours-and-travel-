import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ActivitiesComponent } from './activities/activities.component';

import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { ToursComponent } from './tours/tours.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { PlanComponent } from './plan/plan.component';
import { ReviewComponent } from './review/review.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ActivitiesComponent,
   
    SignupComponent,
    BookComponent,
    ToursComponent,
    AdminComponent,
    UserComponent,
    NavComponent,
    PlanComponent,
    ReviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
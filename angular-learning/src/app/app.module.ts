import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileFormComponent } from './dashboard/profile-form/profile-form.component';
import { ProfileInfoComponent } from './dashboard/profile-info/profile-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProfileFormComponent,
    ProfileInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

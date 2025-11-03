import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { FormsModule } from '@angular/forms';
import { InvestmentResult } from './investment-result/investment-result';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    Header,
    UserInput,
    InvestmentResult
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

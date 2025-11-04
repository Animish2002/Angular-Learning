import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Traffic } from './dashboard/traffic/traffic';
import { SupportTicket } from './dashboard/support-ticket/support-ticket';
import { DashboardItem } from './dashboard/dashboard-item/dashboard-item';
import { NewTickets } from './dashboard/support-ticket/new-tickets/new-tickets';
import { Button } from './shared/button/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormResponse } from './dashboard/support-ticket/form-response/form-response';

@NgModule({
  declarations: [
    App,
    Header,
    ServerStatus,
    Traffic,
    SupportTicket,
    DashboardItem,
    NewTickets,
    Button,
    FormResponse,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    App,
    Header,
    ServerStatus,
    Traffic,
    SupportTicket,
    DashboardItem,
    NewTickets,
    Button
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

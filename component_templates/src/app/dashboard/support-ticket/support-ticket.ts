import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-support-ticket',
  standalone: false,
  templateUrl: './support-ticket.html',
  styleUrl: './support-ticket.css',
})
export class SupportTicket {
  formData: { title: string; request: string } | null = null;

  handleTicketSubmit(data: { title: string; request: string }) {
    this.formData = data;
    console.log('Received form data:', data);
  }

}

import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-tickets',
  standalone: false,
  templateUrl: './new-tickets.html',
  styleUrl: './new-tickets.css',
})
export class NewTickets {

  title = '';
  request = '';

  @Output() formSubmit = new EventEmitter<{ title: string; request: string }>();



  onSubmit() {
    console.log(this.title, this.request,"");
    this.formSubmit.emit({ title: this.title, request: this.request });
  }
}

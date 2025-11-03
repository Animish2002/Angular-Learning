import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: false,
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
  currentStatus = 'online';
}

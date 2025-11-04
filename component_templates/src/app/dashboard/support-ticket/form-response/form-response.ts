import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-response',
  standalone: false,
  templateUrl: './form-response.html',
  styleUrl: './form-response.css',
})
export class FormResponse {
@Input() data: { title: string; request: string } | null = null;  
}

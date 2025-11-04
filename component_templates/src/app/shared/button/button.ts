import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input({required:true}) buttonName! : string;

}

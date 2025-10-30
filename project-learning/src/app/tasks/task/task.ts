import { Component,Input } from '@angular/core';



@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task { 
  @Input() title!: string;
  @Input() summary!: string;
  @Input() dueDate!: string;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';


interface TaskItem {
  id: string;
  title: string;
  summary: string;
  dueDate: string;
  userId: string;
}


@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task { 
  @Input() tasks!: TaskItem ;
  @Output() complete = new EventEmitter<string>(); 

   onCompleteTask(id: string) {
    this.complete.emit(id); // just emit the ID; don't filter here
  }
}

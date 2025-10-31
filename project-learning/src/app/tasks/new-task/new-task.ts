import { CommonModule } from '@angular/common';
import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [CommonModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<any>();

  // onSubmit(form: any) {
  //   const newTask = {
  //     id: Math.random().toString(),
  //     title: form.value.title,
  //     summary: form.value.summary,
  //     dueDate: form.value['due-date'],
  //     userId: 'someUserId' // you can pass this as @Input() later
  //   };
  //   this.add.emit(newTask);
  // }

  onCancel() {
    this.cancel.emit();
  }
}
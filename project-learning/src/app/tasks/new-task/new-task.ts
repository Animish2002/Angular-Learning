import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{ title: string; summary: string; date: string }>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelTask() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}

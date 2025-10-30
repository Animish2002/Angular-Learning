import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from '../data/dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Tasks {
  @Input ({required:true}) id!: string;
  @Input({required:true}) name!: string;

  
  tasks = dummyTasks;

   get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }  
}

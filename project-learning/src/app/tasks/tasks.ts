import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from '../data/dummy-tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [Task,CommonModule],
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

  trackTask(index: number, task: any) {
    return task.id;
  }

  onCompleteTask(id:string){
     this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from '../data/dummy-tasks';
import { CommonModule } from '@angular/common';
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  imports: [Task, CommonModule, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Tasks {
  @Input ({required:true}) id!: string;
  @Input({required:true}) name!: string;
  @Output() addTask = new EventEmitter<string>();

  tasks = dummyTasks;
  isAddingTask = false;

   get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }  

  trackTask(index: number, task: any) {
    return task.id;
  }

  onCompleteTask(id:string){
     this.tasks = this.tasks.filter(task => task.id !== id);
     //here keep only though tasks whose id is not what i clicked on for complete
  }

  onAddTask(taskData: {title:string, summary:string, date:string}) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })

        this.isAddingTask=false;
}

  onCancelTask(){
    this.isAddingTask=false;
  }
}

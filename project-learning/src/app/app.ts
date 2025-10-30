import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from "./data/dummy-users";
import { Tasks } from './tasks/tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User,Tasks,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
 
  users = DUMMY_USERS;
  selectedUserName: string = '';
  selectedUserId:string = '';


  onUserSelected(user: { id: string; name: string }) {
    this.selectedUserId = user.id;
    this.selectedUserName = user.name;
  }
}

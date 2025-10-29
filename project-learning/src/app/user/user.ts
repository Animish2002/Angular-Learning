import { Component } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];  //get random users from the array
}

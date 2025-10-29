import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from "./data/dummy-users";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('project-learning');
  users = DUMMY_USERS;
  onselectedUser(id: string) {
    console.log("User with id "+id+" clicked");
  }
}

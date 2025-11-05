import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userInfo! : {name: string, email: string};

  onSubmitForm(data:{name:string, email:string}){
    this.userInfo = data;
  }
}

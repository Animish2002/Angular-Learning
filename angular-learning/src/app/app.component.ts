import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';

  serverData?: { serverId: number; serverStatus: string };


  onServerAdded(data: {serverId:number, serverStatus:string}) {
    this.serverData = data;

  }
}

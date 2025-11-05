import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  @Input() userProfile!: {name: string, email: string};


}
